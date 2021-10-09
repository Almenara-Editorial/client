import * as yup from 'yup'

const requiredMessage = (field: string) => `${field} é obrigatório.`

export const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Email inválido')
      .required(requiredMessage('E-mail')),
    name: yup.string().required(requiredMessage('Nome'))
  })
  .required()
