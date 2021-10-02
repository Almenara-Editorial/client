import { generateRequiredFieldMessage } from '@/utils'
import * as yup from 'yup'

export const schema = yup
  .object()
  .shape({
    payerFirstName: yup.string().required(generateRequiredFieldMessage('Nome')),
    payerLastName: yup
      .string()
      .required(generateRequiredFieldMessage('Sobrenome')),
    payerEmail: yup.string().required(generateRequiredFieldMessage('E-mail')),
    identificationType: yup
      .string()
      .required(generateRequiredFieldMessage('Tipo do documento')),
    identificationNumber: yup
      .string()
      .required(generateRequiredFieldMessage('Número do documento'))
  })
  .required()
