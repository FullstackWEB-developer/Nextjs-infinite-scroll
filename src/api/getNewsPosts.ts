import { fetch } from './fetch'

export const getNewsPostById = async (postId: number | string | undefined) => {
  const { data } = await fetch(`/item/${postId}.json`)

  console.log("🚀 ~ file: getNewsPosts.ts:6 ~ getNewsPostById ~ data", data)
  return data.data.results
}

export const getTopStories = async () => {
  const { data } = await fetch(`/topstories.json`)
  return data.data
}

export const getNewsPostsByLimit = async (limit: number) => {
  const { data } = await fetch(`/topstories.json`)

  console.log("🚀 ~ file: getNewsPosts.ts:13 ~ getNewsPostsByLimit ~ data", data)
  return data.data
}
