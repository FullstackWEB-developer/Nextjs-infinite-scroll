import { useInfiniteQuery } from 'react-query'

import { getNewsPostsByLimit } from '@src/api'

export const useGetNewsPostsByLimit = ({ initialData, limit: pageLimit }: any) => {
  const { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage } = useInfiniteQuery(
    'getNewsPostsByLimit',
    ({ pageParam = pageLimit }) => getNewsPostsByLimit(pageParam),
    {
      initialData,
      getNextPageParam: ({ total, limit }) => {
        const nextPage = limit + 30
        return nextPage <= total ? nextPage : undefined
      },
    },
  )

  return { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage }
}
