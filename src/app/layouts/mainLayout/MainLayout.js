import PropTypes from 'prop-types'
import { Fragment } from 'react'
import Header from './widgets/header'
import styles from './main-layout.scss'

MainLayout.propTypes = {
  children: PropTypes.node,
}

MainLayout.defaultProps = {
  children: undefined,
}

export default function MainLayout({ children }) {
  return (
    <Fragment>
      <Header/>
      <div className={styles.content}>
        {children}
      </div>
    </Fragment>
  )
}
