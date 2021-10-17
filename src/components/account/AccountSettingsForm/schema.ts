import { generateRequiredFieldMessage } from '@/utils'
import * as yup from 'yup'

export const schema = yup
  .object()
  .shape({
    fullName: yup.string().required(generateRequiredFieldMessage('Nome'))
  })
  .required()
