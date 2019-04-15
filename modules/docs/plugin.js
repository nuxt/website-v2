class ClientRPC {
  constructor() {
    this.ws = null
    this.challenge = 0
    this.autoReconnectInterval = 2000 // 1 second
    this.returns = new Map()
    this.connected = false
    this.connect()
  }

  connect() {
    const WebSocket = (process.server ? require('ws') : window.WebSocket)
    this.ws = new WebSocket('<%= options.url %>')
    this.ws.onopen = () => {
      this.connected = true
    }
    this.ws.onclose = (e) => {
      this.connected = false
      switch (e.code){
        case 1000: // CLOSE_NORMAL
        case 1005: // CLOSE_NORMAL
          console.log('WebSocket: closed')
          break;
        default: // Abnormal closure
          if (process.client) this.reconnect(e)
          break;
      }
    }
    this.ws.onerror = (e) => {
      switch (e.code){
        case 'ECONNREFUSED':
          if (process.client) this.reconnect(e)
          break;
        default:
          // TODO: call service error handler ($services.on('error', ...))
          console.log('WebSocketClient Error:', e)
          break;
        }
    }
    this.ws.onmessage = this.onMessage.bind(this)
  }

  reconnect(e) {
    console.log(`WebSocketClient: retry in ${this.autoReconnectInterval}ms`, e)
    setTimeout(() => {
      console.log('WebSocketClient: reconnecting...')
      this.connect()
    }, this.autoReconnectInterval)
  }

  onMessage(msg) {
    let obj

    try {
      obj = JSON.parse(msg.data)
    } catch(e) {
      console.error('Error', e, msg.data)
      return
    }
    switch (obj.action) {
      case 'return':
        if (obj.challenge) {
          const [resolve, reject] = this.returns.get(obj.challenge)
          if (obj.error && reject) {
            reject(obj.error)
          }
          if (resolve) {
            resolve(obj.data)
          }
          this.returns.delete(obj.challenge)
        }
      break;
      default:
    }
  }
  async callMethod(name, ...args) {
    if (!this.connected) {
      // console.log('WS not connected, retrying in a sec...')
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return this.callMethod(name, ...args)
    }

    const payload = {
      action: 'call',
      module,
      method: name,
      args: args,
      challenge: ++this.challenge
    }

    const data = new Promise((resolve, reject) => this.returns.set(this.challenge, [resolve, reject]))

    this.ws.send(JSON.stringify(payload))

    return data
  }
}

export default async (ctx, inject) => {
  const rpc = new ClientRPC()
  const $docs = {
    async get(path) {
      return await rpc.callMethod('get', path)
    }
  }
  inject('docs', $docs)
  ctx.$docs = $docs
}
