import PropTypes from 'prop-types'
import { useCallback } from 'react'
import MUIButton from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Icon from '../Icon'
import cx from 'common/utils/cx'
import classes from './button.scss'
import styles from './loading-button.scss'


LoadingButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconClassName: PropTypes.string,
  navigate: PropTypes.func,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
}

LoadingButton.defaultProps = {
  children: undefined,
  icon: undefined,
  iconColor: undefined,
  iconClassName: undefined,
  navigate: undefined,
  onClick: undefined,
  isLoading: undefined,
}

export default function LoadingButton({
  children,
  icon,
  iconColor,
  iconClassName,
  navigate,
  onClick,
  isLoading,
  ...props
}) {
  const handleClick = useCallback((e) => {
    onClick && onClick(e)
    if(navigate) {
      e.preventDefault()
      navigate()
    }
  }, [onClick, navigate])
  return (
    <MUIButton {...props} classes={classes} onClick={handleClick}>
      <div className={cx(styles.loader, isLoading && styles.loaderActive)}>
        <CircularProgress size={20}/>
      </div>
      <div className={cx(styles.content, isLoading && styles.contentActive)}>
        {icon ? <Icon name={icon} className={iconClassName} color={iconColor}/> : null}
        {children}
      </div>
    </MUIButton>
  )
}
