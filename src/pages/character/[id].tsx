import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'

import { getNewsPostById } from '@src/api'
import { PostDetailCard } from '@src/components'
import { IPostListDetail } from '@src/types'

const Post: NextPage<IPostListDetail> = ({ data }: IPostListDetail) => {
  return (
    <>
      <Head>
        <title>Hacker news | {data?.[0]?.name} </title>
      </Head>
      <main className="container mx-auto p-3 md:p-6">
        {data?.map((post: any) => (
          <PostDetailCard key={post.id} post={post} />
        ))}
      </main>
    </>
  )
}

export default Post

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
  const data = await getNewsPostById(params?.id)
  return { props: { data } }
}
