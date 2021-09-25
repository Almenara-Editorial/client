import { useFormContext } from 'react-hook-form'
import { TextField, TextFieldProps } from '../form'

type RHFTextFieldProps = TextFieldProps & {
  name: string
}

export function RHFTextField({ name, ...rest }: RHFTextFieldProps) {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <TextField {...register(name)} {...rest} error={errors[name]?.message} />
  )
}
