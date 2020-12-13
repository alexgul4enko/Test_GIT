import List from '@material-ui/core/List'
import { useMemo, Fragment } from 'react'
import Issue from './widgets/issue'
import isEmpty from 'lodash/isEmpty'

export default function IssuesView({ issues }) {
  const items = useMemo(() => {
    if(isEmpty(issues.data)) {
      return null
    }
    return issues.data.map(item => <Issue {...item} key={item.id}/>)
  }, [issues.data])
  if(!items) {
    return (
      <h1> No pull issues</h1>
    )
  }
  return (
    <Fragment>
      <h1>Issues</h1>
      <List>
        {items}
      </List>
    </Fragment>
  )
}
