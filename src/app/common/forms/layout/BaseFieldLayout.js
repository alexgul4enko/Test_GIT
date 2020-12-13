import PropTypes from 'prop-types'
import { useMemo } from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import cx from 'common/utils/cx'
import styles from './layout.scss'


BaseFieldLayout.propTypes = {
  label: PropTypes.node,
  required: PropTypes.bool,
  inputComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.func,
  ]).isRequired,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  name: PropTypes.string,
  errorClassName: PropTypes.string,
}

BaseFieldLayout.defaultProps = {
  label: undefined,
  required: false,
  name: undefined,
  errorClassName: undefined,
}

export default function BaseFieldLayout({
  label,
  required,
  inputComponent: InputComponent,
  meta,
  input,
  name,
  errorClassName,
  ...rest
}) {
  const error = useMemo(() => {
    if(meta.submitError && !meta.dirtySinceLastSubmit) {
      return meta.submitError
    }
    if(meta.error && meta.touched) {
      return meta.error
    }
  }, [meta.error, meta.touched, meta.dirtySinceLastSubmit, meta.submitError])
  const errorText = useMemo(() => {
    if(Array.isArray(error)) {
      return error.map((text) => <p key={text} className={styles.errorText}>{text}</p>)
    }
    return error
  }, [error])

  return (
    <FormControl className={styles.root}>
      {label ? (
        <InputLabel
          htmlFor={name}
          required={required}
          className={styles.label}
          error={Boolean(error)}
        >
          {label}
        </InputLabel>
      ) : null}
      <InputComponent
        required={required}
        error={Boolean(error)}
        {...rest}
        {...input}
      />
      <div className={cx(styles.error, errorClassName)}>{errorText}</div>
    </FormControl>
  )
}
