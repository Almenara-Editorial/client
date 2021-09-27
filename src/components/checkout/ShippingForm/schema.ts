import * as yup from 'yup'

const requiredMessage = (field: string) => `${field} é obrigatório.`

export const schema = yup
  .object()
  .shape({
    cep: yup.string().required(requiredMessage('CEP')),
    street: yup.string().required(requiredMessage('Rua')),
    number: yup.string().required(requiredMessage('Número')),
    info: yup.string(),
    city: yup.string().required(requiredMessage('Cidade')),
    state: yup.string().required(requiredMessage('Estado')),
    shipping: yup.string().required(requiredMessage('Forma de envio'))
  })
  .required()
