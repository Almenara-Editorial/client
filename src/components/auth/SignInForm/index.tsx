import { TextField } from '@/components/form'
import { Button, Link } from '@/components/shared'
import { Form, Row } from './styles'
import { signIn, useSession } from 'next-auth/client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

type SignInFormValues = {
  email: string
  password: string
}

export const SignInForm = () => {
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [session] = useSession()
  const { handleSubmit, register } = useForm()
  async function handleSignin(values: SignInFormValues) {
    setIsSigningIn(true)
    await signIn('credentials', {
      ...values,
      redirect: false
      // callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })
    setIsSigningIn(false)
  }

  return (
    <Form onSubmit={handleSubmit(handleSignin)}>
      <TextField label="E-mail ou usuário" {...register('email')} />
      <TextField label="Senha" type="password" {...register('password')} />
      <Row>
        {/* <Checkbox value={false}>Manter-me conectado</Checkbox> */}
        <Link href="/recuperar-senha">Esqueceu a sua senha?</Link>
      </Row>
      <Button size="rg-full" isLoading={isSigningIn} isSuccess={!!session}>
        {session ? `Olá ${session?.user?.name}` : 'Entrar'}
      </Button>
    </Form>
  )
}
