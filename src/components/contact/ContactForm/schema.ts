import { generateRequiredFieldMessage } from '@/utils'
import * as yup from 'yup'

export const schema = yup
  .object()
  .shape({
    name: yup.string().required(generateRequiredFieldMessage('Nome')),
    subject: yup.string().required(generateRequiredFieldMessage('Nome')),
    message: yup.string().required(generateRequiredFieldMessage('Nome')),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required(generateRequiredFieldMessage('Nome'))
  })
  .required()
