import { compose } from 'redux'
import { withRouter } from '@cranium/router'
import { withInfinityList, navigationToProps } from '@cranium/resource'

export default compose(
  withRouter,
  navigationToProps(),
  withInfinityList('/users/:uuid/repos', {
    defaultParams: {},
  })
)
