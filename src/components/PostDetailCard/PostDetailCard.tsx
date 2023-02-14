import { FC } from 'react'
import Image from 'next/image'

import { findYearInString } from '@src/lib'
import { IPost } from '@src/types'

interface Props {
  post?: IPost
}

const PostDetailCard: FC<Props> = ({ post }) => {
  return (
    <div className="max-w-lg mx-auto" data-testid="post-detail-card">
      <div className="h-[600px] relative rounded overflow-hidden">
        <Image
          layout="fill"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWg8AAc8BJpg2zxQAAAAASUVORK5CYII="
          className="object-center object-cover"
          src={`${post?.thumbnail?.path}.${post?.thumbnail?.extension}`}
          alt={post?.name}
        />
      </div>
      <p className="font-bold text-center p-2 text-lg">{post?.name}</p>
      <p className="font-medium text-center p-2">{post?.description}</p>
      <ul className="space-y-2 mt-6 text-center">
        {post?.comics?.items
          ?.slice(0, 10)
          .sort((a: any, b: any) => findYearInString(b.name) - findYearInString(a.name))
          ?.map((comics: any, index: any) => (
            <li key={index}>{comics.name}</li>
          ))}
      </ul>
    </div>
  )
}

export default PostDetailCard
