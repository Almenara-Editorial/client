import * as yup from 'yup'

const requiredMessage = (field: string) => `${field} é obrigatório.`

export const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required(requiredMessage('E-mail'))
  })
  .required()
