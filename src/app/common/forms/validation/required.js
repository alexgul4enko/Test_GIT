import errors from './constants'

export default function required(value) {
  return (!value && value !== 0) ? errors.required : undefined
}
