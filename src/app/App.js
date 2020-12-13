import { Provider } from 'react-redux'
import Router from 'common/router'
import { ThemeProvider } from '@material-ui/core/styles'
import { CheckCache } from '@cranium/cache'
import { hot } from 'react-hot-loader/root'
import PropTypes from 'prop-types'
import api from 'api'
import theme from 'theme'


AppProvider.propTypes = {
  store: PropTypes.object.isRequired,
}


function AppProvider({ store }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CheckCache>
          <Router />
        </CheckCache>
      </Provider>
    </ThemeProvider>
  )
}

export default hot(AppProvider)
