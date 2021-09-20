import { TextField } from '@/components/form'
import { Button, Link } from '@/components/shared'
import { Form, Row } from './styles'
import { signIn, useSession } from 'next-auth/client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

type LoginModalFormValues = {
  email: string
  password: string
}

export const LoginModalForm = () => {
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [session] = useSession()
  const { handleSubmit, register } = useForm()
  async function handleSignin(values: LoginModalFormValues) {
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
      <TextField {...register('email')} />
      <TextField type="password" {...register('password')} />
      <Row>
        {/* <Checkbox value={false}>Manter-me conectado</Checkbox> */}
        <Link href="#">Esqueceu a sua senha?</Link>
      </Row>
      <Button size="rg-full" isLoading={isSigningIn} isSuccess={!!session}>
        {session ? `Olá ${session?.user?.name}` : 'Entrar'}
      </Button>
    </Form>
  )
}
