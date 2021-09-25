import { RHFForm, RHFTextField } from '@/components/hook-form'
import { Fields } from './styles'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/shared'
import { MUTATION_REGISTER } from '@/graphql/mutations/register'
import { useMutation } from '@apollo/client'
import { signIn } from 'next-auth/client'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schema'

type SignUpFormValues = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export const SignUpForm = () => {
  const formMethods = useForm<SignUpFormValues>({
    resolver: yupResolver(schema)
  })
  const { handleSubmit, getValues } = formMethods
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

  async function onSubmit(values: SignUpFormValues) {
    await createUser({
      variables: {
        input: {
          username: values.username,
          password: values.password,
          email: values.email
        }
      }
    })
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <Fields onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField label="Usuário" name="username" />
        <RHFTextField label="E-mail" name="email" />
        <RHFTextField label="Senha" type="password" name="password" />
        <RHFTextField
          label="Confirme a senha"
          type="password"
          name="confirmPassword"
        />
        <Button type="submit" isLoading={loading}>
          Confirmar
        </Button>
      </Fields>
    </RHFForm>
  )
}
