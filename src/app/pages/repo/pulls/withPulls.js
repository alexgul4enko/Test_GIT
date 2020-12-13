import { compose } from 'redux'
import { withRouter } from '@cranium/router'
import { withInfinityList, navigationToProps } from '@cranium/resource'
import { Loader } from 'common/widgets/loaders'

export default compose(
  withRouter,
  navigationToProps(),
  withInfinityList({
    namespace: 'pulls',
    endpoint: '/repos/:owner/:uuid/pulls',
    queries: ['per_page', 'page'],
  }, {
    Loader,
    defaultParams: {
    },
  }),
)
