#!/usr/bin/env node -r jiti/register

import Crawler from 'crawler'
import consola from 'consola'
import { withoutTrailingSlash } from 'ufo'
import chalk from 'chalk'

const logger = consola.withTag('crawler')

const excludedExtensions = ['svg', 'png', 'jpg', 'sketch', 'ico', 'gif']
const urlsToOmit = ['http://localhost:3000']

const sourceSite = 'https://nuxtjs.org'
const baseURL = withoutTrailingSlash(process.env.BASE_URL || 'https://preview.nuxtjs.org')

const startingURL = sourceSite + '/'

// GLOBALS
const urls = new Set([startingURL])
const erroredUrls = []

let crawler: Crawler

const credentials = Buffer.from('nuxt:nuxt').toString('base64')

const verifier = new Crawler({
  maxConnections: 100,
  headers: {
    Authorization: `Basic ${credentials}`
  },
  callback (error, res, done) {
    const { $ } = res
    const { uri } = res.options
    // @ts-ignore
    const { statusCode } = res.request.response

    if (error || ![200, 301, 302].includes(statusCode)) {
      const message = chalk.red(`${chalk.bold('✗')} ${uri} (${statusCode})`)
      logger.log(message)
      erroredUrls.push(uri)
      return done()
    }

    if (!$) {
      logger.error('Could not parse', uri)
      return done()
    }

    logger.success(chalk.green(uri))
    logger.debug(uri, `[${verifier.queueSize} / ${urls.size}]`)
    done()
  },
})

function queue (path: string, referrer?: string) {
  if (urlsToOmit.some(url => path.startsWith(url))) return

  const { pathname, origin } = new URL(path, referrer)

  // Don't crawl the same page more than once
  const url = `${origin}${pathname}`
  if (!url || urls.has(url) || !crawler) return

  // Don't try to visit linked assets (e.g. SVGs)
  const extension = url.split('.').pop()
  if (excludedExtensions.includes(extension)) return

  // Don't crawl external URLs
  if (origin !== sourceSite) return

  urls.add(url)

  crawler.queue(url)
  verifier.queue(`${baseURL}${pathname}`)
}

crawler = new Crawler({
  maxConnections: 100,
  callback (error, res, done) {
    const { $ } = res
    const { uri } = res.options
    // @ts-ignore
    const { statusCode } = res.request.response

    if (error || ![200, 301, 302].includes(statusCode) || !$) {
      return done()
    }

    $(`a:not([href*=mailto])`).each((_, el) => 'attribs' in el && queue(el.attribs.href, uri))

    if (crawler.queueSize === 1) {
      logger.log('')
      logger.info(`Checked \`${urls.size}\` pages.`)
      // Tasks to run at the end.
      if (erroredUrls.length) {
        const message = `Could not find ${chalk.bold(erroredUrls.length)} equivalent URLs on ${chalk.bold(baseURL)}.`
        const error = new Error(`\n\n${message}\n`)
        error.message = message
        error.stack = ''
        throw error
      }
    }
    done()
  },
})

logger.log('')
logger.info(`Checking \`${sourceSite}\`.`)
logger.info(`Ignoring file extensions: \`${excludedExtensions.join(', ')}.\`\n`)

crawler.queue(startingURL)
