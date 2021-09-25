import * as yup from 'yup'

const requiredMessage = (field: string) => `${field} é obrigatório.`

export const schema = yup
  .object()
  .shape({
    username: yup.string().required(requiredMessage('Nome de usuário')),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required(requiredMessage('E-mail')),
    password: yup.string().required(requiredMessage('Senha')),
    confirmPassword: yup.string().required(requiredMessage('Confirmar a senha'))
  })
  .required()
