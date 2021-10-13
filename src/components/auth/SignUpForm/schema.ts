import * as yup from 'yup'

const requiredMessage = (field: string) => `${field} é obrigatório.`

export const schema = yup
  .object()
  .shape({
    fullName: yup.string().required(requiredMessage('Nome')),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required(requiredMessage('E-mail')),
    password: yup.string().required(requiredMessage('Senha')),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'As senhas não são iguais.')
      .required(requiredMessage('Confirmar a senha'))
  })
  .required()
