import * as CryptoJS from 'crypto-js'
import axios from 'axios'

// Marvel API access keys
const publicKey = process.env.VUE_APP_PUBLIC_KEY_MARVEL
const privateKey = process.env.VUE_APP_PRIVATE_KEY_MARVEL

// Axios configuration
const marvelApi = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
})

async function getSeriesPage(url: string , page: number) {
  const timestamp = Date.now().toString()
  const hash = CryptoJS.MD5(`${timestamp}${privateKey}${publicKey}`)
  const pageSize = 20
//'/series'
  try {
    const response = await marvelApi.get(url, {
      baseURL: 'https://gateway.marvel.com/v1/public',
      params: {
        ts: timestamp,
        apikey: publicKey,
        hash: hash,
        offset: page * pageSize,
        limit: pageSize,
      },
    })

    return response.data.data.results
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Error when obtaining the series: ' + error.message)
    } else {
      throw new Error('Error when obtaining the series: ' + error)
    }
  }
}

export {
  getSeriesPage
}