import { compose } from 'redux'
import { withRouter } from '@cranium/router'
import { withInfinityList, navigationToProps } from '@cranium/resource'
import { Loader } from 'common/widgets/loaders'

export default compose(
  withRouter,
  navigationToProps(),
  withInfinityList({
    namespace: 'issues',
    endpoint: '/repos/:owner/:uuid/issues',
    queries: ['per_page', 'page'],
  }, {
    Loader,
    defaultParams: {
    },
  }),
)
