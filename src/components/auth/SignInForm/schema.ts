import * as yup from 'yup'

const requiredMessage = (field: string) => `${field} é obrigatório.`

export const schema = yup
  .object()
  .shape({
    email: yup.string().required(requiredMessage('E-mail')),
    password: yup.string().required(requiredMessage('Senha'))
  })
  .required()
