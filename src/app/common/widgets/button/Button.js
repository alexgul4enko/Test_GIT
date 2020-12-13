import PropTypes from 'prop-types'
import { useCallback } from 'react'
import MUIButton from '@material-ui/core/Button'
import Icon from '../Icon'
import styles from './button.scss'


Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconClassName: PropTypes.string,
  navigate: PropTypes.func,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  children: undefined,
  icon: undefined,
  iconColor: undefined,
  iconClassName: undefined,
  navigate: undefined,
  onClick: undefined,
}

export default function Button({
  children,
  icon,
  iconColor,
  iconClassName,
  navigate,
  onClick,
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
    <MUIButton {...props} classes={styles} onClick={handleClick}>
      {icon ? <Icon name={icon} className={iconClassName} color={iconColor}/> : null}
      {children}
    </MUIButton>
  )
}
