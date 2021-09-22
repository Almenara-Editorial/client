import { TextField } from '@/components/form'
import { Form } from './styles'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/shared'
import { UsersPermissionsRegisterInput } from '@/graphql/generated/globalTypes'
import { MUTATION_REGISTER } from '@/graphql/mutations/register'
import { useMutation } from '@apollo/client'
import { signIn } from 'next-auth/client'

type SignUpFormValues = {
  name: string
  email: string
  password: string
  retypePassword: string
}

export const SignUpForm = () => {
  const { handleSubmit, register, getValues } = useForm()
  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) => console.log(err),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: getValues('email'),
          username: getValues('username'),
          password: getValues('password'),
          callbackUrl: '/'
        })
    }
  })

  async function handleSignUp(values: UsersPermissionsRegisterInput) {
    const user = await createUser({
      variables: {
        input: {
          username: values.username,
          password: values.password,
          email: values.email
        }
      }
    })

    console.log(user)
  }

  return (
    <Form onSubmit={handleSubmit(handleSignUp)}>
      <TextField label="Nome" {...register('username')} />
      <TextField label="E-mail" {...register('email')} />
      <TextField label="Senha" type="password" {...register('password')} />
      <TextField
        label="Confirme a senha"
        type="password"
        {...register('retypePassword')}
      />
      <Button type="submit" isLoading={loading}>
        Confirmar
      </Button>
    </Form>
  )
}
