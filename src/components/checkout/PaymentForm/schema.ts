import * as yup from 'yup'

const requiredMessage = (field: string) => `${field} é obrigatório.`

export const schema = yup
  .object()
  .shape({
    number: yup.string().required(requiredMessage('Número do cartão')),
    name: yup.string().required(requiredMessage('Nome')),
    expiry: yup.string().required(requiredMessage('Data de validade')),
    cvc: yup.string().required(requiredMessage('CVC'))
  })
  .required()
