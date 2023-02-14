import { IPost } from '@src/types'

export interface IPostList {
  pagesParam?: []
  pages: IPages[]
}

interface IPages {
  count: number
  limit: number
  offset: number
  results: IResults
}

interface IResults {
  post: IPost[]
}
