const integrations = {
  async getIntegrations() {
    return (await import('@nuxt/integrations')).default
  },
  formatCategory(category) {
    if (category.length > 3) {
      return category[0].toUpperCase() + category.substr(1)
    }
    return category.toUpperCase()
  }
}

export default function (_ctx, inject) {
  inject('integrations', integrations)
}
