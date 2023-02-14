import Axios from 'axios'

export const fetch = Axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/topstories.json',
  params: {
    print: 'pretty',
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
