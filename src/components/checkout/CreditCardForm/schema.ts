import { generateRequiredFieldMessage, validateDate } from '@/utils'
import * as yup from 'yup'

export const schema = yup
  .object()
  .shape({
    cardNumber: yup
      .string()
      .required(generateRequiredFieldMessage('Número do cartão')),
    cardHolderName: yup.string().required(generateRequiredFieldMessage('Nome')),
    cardHolderEmail: yup
      .string()
      .required(generateRequiredFieldMessage('E-mail')),
    cardExpiration: yup
      .string()
      .required(generateRequiredFieldMessage('Data de expiração'))
      .test(
        'expirationDate',
        'Formato da data deve ser dd/yyyy',
        (date) => !!date && validateDate(date)
      ),
    securityCode: yup
      .string()
      .required(generateRequiredFieldMessage('Código de segurança')),
    identificationType: yup
      .string()
      .required(generateRequiredFieldMessage('Tipo de documento')),
    identificationNumber: yup
      .string()
      .required(generateRequiredFieldMessage('Número do documento'))
  })
  .required()
