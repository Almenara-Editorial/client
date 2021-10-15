import { generateRequiredFieldMessage } from '@/utils'
import * as yup from 'yup'

export const schema = yup
  .object()
  .shape({
    currentPassword: yup
      .string()
      .required(generateRequiredFieldMessage('Nome')),
    newPassword: yup.string().required(generateRequiredFieldMessage('Nome')),
    newPasswordConfirmation: yup
      .string()
      .required(generateRequiredFieldMessage('Nome'))
  })
  .required()
