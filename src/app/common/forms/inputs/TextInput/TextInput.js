import PropTypes from 'prop-types'
import { useCallback } from 'react'
import TextField from '@material-ui/core/TextField'
import cx from 'common/utils/cx'
import styles from './text-input.scss'


TextInput.propTypes = {
  inputClassName: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
}

TextInput.defaultProps = {
  inputClassName: 'input-custom',
  size: undefined,
}

export default function TextInput({ onChange, inputClassName, size, ...props }) {
  const handleChange = useCallback((e) => onChange(e.target.value), [onChange])
  return (
    <TextField
      {...props}
      variant="outlined"
      className={cx(styles.root, size === 'small' && styles.small, inputClassName)}
      onChange={handleChange}
    />
  )
}
