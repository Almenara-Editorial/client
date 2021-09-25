import { Button, Link } from '@/components/shared'
import { Fields, Row } from './styles'
import { signIn, useSession } from 'next-auth/client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@/components/form/ErrorMessage'
import { RHFForm, RHFTextField } from '@/components/hook-form'

type SignInFormValues = {
  email: string
  password: string
}

export const SignInForm = () => {
  const [signInError, setSignInError] = useState<string | null>(null)
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [session] = useSession()
  const formMethods = useForm<SignInFormValues>({
    resolver: yupResolver(schema)
  })
  async function onSubmit(values: SignInFormValues) {
    setIsSigningIn(true)
    await signIn('credentials', {
      ...values,
      redirect: false
    }).catch((error) => {
      setSignInError(error.response.data.message[0].messages[0].id)
    })
    setIsSigningIn(false)
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <Fields>
        <RHFTextField label="E-mail ou usuário" name="email" />
        <RHFTextField label="Senha" type="password" name="password" />
        <Row>
          {/* <Checkbox value={false}>Manter-me conectado</Checkbox> */}
          <Link href="/recuperar-senha">Esqueceu a sua senha?</Link>
        </Row>
        <div>
          <Button size="rg-full" isLoading={isSigningIn} isSuccess={!!session}>
            {session ? `Olá ${session?.user?.name}` : 'Entrar'}
          </Button>
          {signInError && <ErrorMessage error={signInError} />}
        </div>
      </Fields>
    </RHFForm>
  )
}
