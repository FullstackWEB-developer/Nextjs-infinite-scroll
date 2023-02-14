import { useInfiniteQuery } from 'react-query'

import { getNewsPostsByLimit } from '@src/api'

export const useGetNewsPostsByLimit = ({ initialData, limit: pageLimit, topStories }: any) => {
  const { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage } = useInfiniteQuery(
    'getNewsPostsByLimit',
    ({ pageParam = pageLimit }) => getNewsPostsByLimit(pageParam, topStories),
    {
      initialData,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage.length + 10
        return nextPage <= allPages.flat(2).length ? nextPage : undefined
      },
    },
  )

  return { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage }
}
