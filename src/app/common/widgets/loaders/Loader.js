import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './loader.scss'

CircularLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default function CircularLoader({ isLoading, children }) {
  return isLoading ? <CircularProgress className={styles.loader}/> : children
}
