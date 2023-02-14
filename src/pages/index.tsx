import { useRef } from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { PostList, Loading } from '@src/components'
// import { getNewsPostsByLimit } from '@src/api'
import { useGetNewsPostsByLimit, useIntersectionObserver } from '@src/hooks'
import { getNewsPostById, getTopStories } from '@src/api/getNewsPosts'

const Home: NextPage = (props: any) => {
  const { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage } = useGetNewsPostsByLimit({
    initialData: props.data,
    limit: 10,
    topStories: props.topStories
  })
  console.log("🚀 ~ file: index.tsx:16 ~ hasNextPage", hasNextPage)

  const loadMoreRef = useRef<HTMLHeadingElement>(null)

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <>
      <Head>
        <title>Hacker news</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container mx-auto p-3 md:p-6 space-y-5">
        {data && <PostList data={data} />}
        {isError ? (
          <div className="text-red-500 font-bold"> You may not request more than 100 items. </div>
        ) : (
          <div ref={loadMoreRef} className={`${!hasNextPage ? 'hidden' : ''}`}>
            {isFetchingNextPage && <Loading loadingText="Loading more..." />}
          </div>
        )}
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  // const data = await getNewsPostsByLimit(10)
  const topStories: string[] = await getTopStories()
  const data = await Promise.all(
    topStories.slice(0, 10).map(async (postId, i) => await getNewsPostById(postId))
  );
  return { props: { data, topStories } }
}
