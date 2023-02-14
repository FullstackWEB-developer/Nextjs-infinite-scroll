import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IPost } from '@src/types'
interface Props {
  post: IPost
}

const PostListCard: FC<Props> = ({ post }) => {
  return (
    <Link href={`/post/${post.id}`}>
      <a className="group rounded overflow-hidden border bg-gray-700" data-testid="post-list-card">
        <div className="h-[200px] relative">
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWg8AAc8BJpg2zxQAAAAASUVORK5CYII="
            className="object-center object-cover transition duration-300 transform  group-hover:scale-110 "
            src={`${post?.thumbnail?.path}.${post?.thumbnail?.extension}`}
            alt={post.name}
          />
        </div>
        <p className="font-bold text-center p-2">{post.name}</p>
      </a>
    </Link>
  )
}

export default PostListCard
