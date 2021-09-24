import { TextField } from '@/components/form'
import { Button } from '@/components/shared'
import { Form } from './styles'
import { useForm } from 'react-hook-form'
import { api } from '@/services'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'

type NewPasswordFormValues = {
  password: string
  confirmPassword: string
}

export const NewPasswordForm = () => {
  const { query } = useRouter()
  const code = query.code?.toString()
  const { handleSubmit, register } = useForm()
  async function onSubmit(values: NewPasswordFormValues) {
    api
      .post('/auth/reset-password', {
        code,
        password: values.password,
        passwordConfirmation: values.confirmPassword
      })
      .then(({ data }) => {
        signIn('credentials', {
          email: data.user.email,
          password: values.password,
          callbackUrl: '/'
        })
      })
      .catch((error) => {
        console.log('An error occurred:', error.response)
      })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Senha" type="password" {...register('password')} />
      <TextField
        label="Confirmar senha"
        type="password"
        {...register('confirmPassword')}
      />
      <Button size="rg-full">Confirmar</Button>
    </Form>
  )
}
