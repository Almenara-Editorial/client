import { TextField } from '@/components/form'
import { Button } from '@/components/shared'
import { Form } from './styles'
import { useForm } from 'react-hook-form'

type RecoveryPasswordFormValues = {
  email: string
}

export const RecoveryPasswordForm = () => {
  const { handleSubmit, register } = useForm()
  async function handleSignin(values: RecoveryPasswordFormValues) {}

  return (
    <Form onSubmit={handleSubmit(handleSignin)}>
      <TextField label="E-mail" {...register('email')} />
      <Button size="rg-full">Enviar</Button>
    </Form>
  )
}
