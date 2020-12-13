import BaseFieldHOC from './BaseFieldHOC'

import { TextInput, PasswordInput } from './inputs/TextInput'

const TextField = BaseFieldHOC(TextInput)
const PasswordField = BaseFieldHOC(PasswordInput)

export {
  TextField,
  PasswordField,
}
