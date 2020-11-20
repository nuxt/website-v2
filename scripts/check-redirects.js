import path from 'path'

import consola from 'consola'
import Crawler from 'crawler'
import fs from 'fs-extra'

const logger = consola.withTag('redirect-tester')

const redirects = fs
  .readFileSync(path.resolve(__dirname, '../_redirects'))
  .toString()
  .split('\n')
  .filter(redirect => redirect && !redirect.startsWith('#'))
  .filter(redirect => redirect.startsWith('/'))
  .map(redirect => redirect.split(' ')[1])
  .filter(redirect => redirect.startsWith('/'))
  .map(redirect => 'https://nuxtjs.org' + redirect)

const crawler = new Crawler({
  maxConnections: 100,
  callback(error, res, done) {
    const { uri } = res.options
    const { statusCode } = res.request.response

    if (error || ![200, 301, 302].includes(statusCode)) {
      logger.error('Error crawling', uri, `(status ${statusCode})`)
      return done()
    }

    logger.success(uri)
    done()
  }
})

logger.log('')
logger.info(`Checking \`internal redirects\`.`)

redirects.forEach(redirect => crawler.queue(redirect))
