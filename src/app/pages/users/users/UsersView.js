import { Fragment, useMemo } from 'react'
import Search from './widgets/search'
import User from './widgets/user'
import List from '@material-ui/core/List'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import styles from './users.scss'

export default function Users({ search, data, filters, isLoading }) {
  const items = useMemo(() => {
    if(isEmpty(get(data, 'items'))) {
      if(!get(filters, 'q')) {
        return <p className={styles.noData}>Start typing to search for user</p>
      }
      if(isLoading) {
        return null
      }
      return <p className={styles.noData}>No results found</p>
    }
    return data.items.map(item => <User {...item} key={item.id}/>)
  }, [data, filters, isLoading])
  return (
    <div className={styles.users}>
      <h1>Git users</h1>
      <Search search={search} isLoading={isLoading}/>
      <List>
        {items}
      </List>
    </div>
  )
}
