import { useFormContext } from 'react-hook-form'
import { TextArea, TextAreaProps } from '../form'

type RHFTextAreaProps = TextAreaProps & {
  name: string
}

export function RHFTextArea({ name, ...rest }: RHFTextAreaProps) {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <TextArea {...register(name)} {...rest} error={errors[name]?.message} />
  )
}
