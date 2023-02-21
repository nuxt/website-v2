function Timer(callback, delay) {
  let timerId
  let start
  let remaining = delay

  this.pause = function () {
    window.clearTimeout(timerId)
    remaining -= new Date() - start
  }

  this.resume = function () {
    start = new Date()
    window.clearTimeout(timerId)
    timerId = window.setTimeout(callback, remaining)
  }

  this.reset = function () {
    start = new Date()
    window.clearTimeout(timerId)
    timerId = window.setTimeout(callback, delay)
  }

  this.stop = function () {
    window.clearTimeout(timerId)
  }

  this.resume()
}

function Ticker(callback, interval) {
  let id

  this.start = function () {
    id = window.setInterval(callback, interval)
  }

  this.stop = function () {
    window.clearInterval(id)
  }

  this.start()
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (ctx, inject) => {
  inject('timer', Timer)
  inject('ticker', Ticker)
}
