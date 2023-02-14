import { FC } from 'react'

import { IPostList } from '@src/types'
import Post from '../PostListCard/PostListCard'

interface Props {
  data: IPostList
}

const PostList: FC<Props> = ({ data }) => {
  return (
    <div data-testid="post-list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8">
      {data?.pages?.map(({ results }: any) =>
        results?.map((post: any) => <Post key={post.id} post={post} />),
      )}
    </div>
  )
}

export default PostList
