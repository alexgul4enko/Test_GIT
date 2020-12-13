import UsersView from './UsersView'
import { useResource, useSearch } from '@cranium/resource'
import { useCallback } from 'react'

export default function UsersContainer() {
  const { fetch, data, clear, filters, isLoading } = useResource({
    namespace: '/search/users',
    queries: ['q', 'per_page'],
  })
  const search = useSearch(fetch)
  const handleSearch = useCallback((q) => {
    search({ q, per_page: 30 })
    if(!q) {
      clear()
    }
  }, [search, clear])
  return (
    <UsersView
      search={handleSearch}
      data={data}
      filters={filters}
      isLoading={isLoading}
    />
  )
}
