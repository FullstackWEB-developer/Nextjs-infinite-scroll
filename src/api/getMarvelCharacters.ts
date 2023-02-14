import { fetch } from './fetch'

export const getNewsPostById = async (postId: number | undefined) => {
  const { data } = await fetch(`/public/posts/${postId}`)

  return data.data.results
}

export const getNewsPostsByLimit = async (limit: number) => {
  const { data } = await fetch(`/public/posts?limit=${limit}&offset=${limit - 30}`)

  return data.data
}
