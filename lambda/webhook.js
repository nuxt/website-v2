const fetch = require('node-fetch')
const jwt = require('jsonwebtoken')

exports.handler = async function ({ body, headers }) {
  const signature = headers['X-Webhook-Signature']

  try {
    jwt.verify(signature, process.env.SECRET_TOKEN || '')
  } catch {
    return {
      statusCode: 403
    }
  }

  await fetch('https://api.github.com/repos/nuxt/nuxtjs.org/dispatches', {
    method: 'post',
    body: JSON.stringify({
      event_type: 'check_links',
      client_payload: {
        deploy_url: body.deploy_url,
        commit_ref: body.commit_ref
      }
    })
  })

  return {
    statusCode: 204
  }
}
