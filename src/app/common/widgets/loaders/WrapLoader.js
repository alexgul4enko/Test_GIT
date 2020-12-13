import PropTypes from 'prop-types'
import { Fragment } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import cx from 'common/utils/cx'
import styles from './loader.scss'

WrapLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

WrapLoader.defaultProps = {
  className: undefined,
}


export default function WrapLoader({ isLoading, children, className }) {
  return (
    <Fragment>
      {isLoading ? <div className={cx(styles.center, className)}><CircularProgress className={styles.loader}/></div> : null}
      {children}
    </Fragment>
  )
}
