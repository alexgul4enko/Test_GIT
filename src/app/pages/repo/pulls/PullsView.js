import List from '@material-ui/core/List'
import { useMemo, Fragment } from 'react'
import Pull from './widgets/pull'
import isEmpty from 'lodash/isEmpty'

export default function Pulls({ pulls }) {
  const items = useMemo(() => {
    if(isEmpty(pulls.data)) {
      return null
    }
    return pulls.data.map(item => <Pull {...item} key={item.id}/>)
  }, [pulls.data])
  if(!items) {
    return (
      <h1> No pull request</h1>
    )
  }
  return (
    <Fragment>
      <h1>Pulls</h1>
      <List>
        {items}
      </List>
    </Fragment>
  )
}
