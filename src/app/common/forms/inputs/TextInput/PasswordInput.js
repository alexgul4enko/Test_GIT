import { useState, useMemo, useCallback } from 'react'
import TextInput from './TextInput'
import Button from 'common/widgets/button'
import InputAdornment from '@material-ui/core/InputAdornment'
import styles from './text-input.scss'

export default function PasswordInput(props) {
  const [type, setType] = useState('password')
  const toogle = useCallback(() => {
    setType(type === 'password' ? 'text' : 'password')
  }, [type, setType])
  const inputProps = useMemo(() => ({
    endAdornment: (
      <InputAdornment position="end">
        <Button
          className={styles.btn}
          icon={type === 'password' ? 'eye' : 'eye-off'}
          onClick={toogle}
          iconClassName={styles.icon}
        />
      </InputAdornment>
    ),
  }), [type, toogle])
  return (
    <TextInput
      type={type}
      InputProps={inputProps}
      {...props}
    />
  )
}
