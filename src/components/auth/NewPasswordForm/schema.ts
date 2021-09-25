import * as yup from 'yup'

const requiredMessage = (field: string) => `${field} é obrigatório.`

export const schema = yup
  .object()
  .shape({
    password: yup.string().required(requiredMessage('Senha')),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'As senhas não são iguais.')
  })
  .required()
