import { useInfiniteQuery } from 'react-query'

import { getNewsPostsByLimit } from '@src/api'

export const useGetNewsPostsByLimit = ({ initialData, limit: pageLimit, topStories }: any) => {
  const { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage } = useInfiniteQuery(
    'getNewsPostsByLimit',
    ({ pageParam = pageLimit }) => getNewsPostsByLimit(pageParam, topStories),
    {
      initialData,
      getNextPageParam: (lastPage, allPages) => {
        console.log(
          '🚀 ~ file: useGetNewsPosts.tsx:16 ~ useGetNewsPostsByLimit ~ lastPage, allPages',
          lastPage,
          allPages,
        )
        const nextPage = allPages.flat(2).length + 10
        console.log('🚀 ~ file: useGetNewsPosts.tsx:14 ~ useGetNewsPostsByLimit ~ nextPage', nextPage)
        console.log(
          '🚀 ~ file: useGetNewsPosts.tsx:15 ~ useGetNewsPostsByLimit ~ allPages.flat(2).length',
          allPages.flat(2).length,
        )
        return lastPage.length !== 0 ? nextPage : undefined
      },
    },
  )

  return { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage }
}
