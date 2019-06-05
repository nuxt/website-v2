export default async (ctx, inject) => {
  if (process.client && process.static) {
    return
  }
  const $docs = {
    async get(path) {
      return await fetch('<%= options.url %>' + path).then(response => {
        if (!response.ok) {
          const error = new Error(response.statusText)
          error.response = response
          throw error
        }
        return response.json()
      })
    }
  }
  inject('docs', $docs)
  ctx.$docs = $docs
}
