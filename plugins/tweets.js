import { ssrRef } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

// Universal $fetch workaround (server/client side)
const _fetch = typeof fetch === 'undefined' ? require('ohmyfetch/node').$fetch : $fetch

const BASE_URL = 'https://api.twitter.com/1.1/collections'

// Tweets reference
const tweets = ssrRef([], 'tweetsRef')

/**
 * Tweets helpers
 */
export function useTweets({ collectionID }) {
  // Fetch TweetsCollection
  // TODO: add BAERER Token
  const fetch = async () => {
    // Get collection
    tweets.value = await _fetch(`${BASE_URL}/show.json?id=${collectionID}`, {
      method: 'GET',
      headers: { 'Access-Control-Allow-Origin': '*' }
    })

    return tweets
  }

  return {
    fetch,
    tweets
  }
}
