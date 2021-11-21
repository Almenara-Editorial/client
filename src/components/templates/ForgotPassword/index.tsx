import { AuthLayout } from '@/components/layout'
import { ForgotPasswordForm } from '@/components/auth'
import Head from 'next/head'

export function ForgotPasswordTemplate() {
  return (
    <>
      <Head>
        <title>Almenara Editorial - Recuperar/Alterar senha</title>
      </Head>
      <AuthLayout
        title="Recuperar/Alterar senha"
        subtitle="Digite seu e-mail que enviaremos um link para alteração de senha."
      >
        <ForgotPasswordForm />
      </AuthLayout>
    </>
  )
}
