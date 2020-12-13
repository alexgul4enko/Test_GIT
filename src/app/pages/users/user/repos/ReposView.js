import List from '@material-ui/core/List'
import { useMemo } from 'react'
import Repo from './widgets/repo'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'

export default function ReposView({ usersRepos }) {
  const items = useMemo(() => {
    if(isEmpty(get(usersRepos, 'data'))) {
      return null
    }
    return usersRepos.data.map(item => <Repo {...item} key={item.id}/>)
  }, [get(usersRepos, 'data')])
  return (
    <List>
      {items}
    </List>
  )
}
