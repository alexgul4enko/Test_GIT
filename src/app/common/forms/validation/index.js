import { compose, composeValidators, mainValidation } from './utils'
import required from './required'

export function validateEmail(fields) {
  return mainValidation(fields, email)
}

export function validateRequired(fields) {
  return mainValidation(fields, required)
}

export {
  compose,
  composeValidators,
  required,
}
