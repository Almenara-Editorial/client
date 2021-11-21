import { AuthLayout } from '@/components/layout'
import { SignInForm } from '@/components/auth'
import Head from 'next/head'

export function SignInTemplate() {
  return (
    <>
      <Head>
        <title>Almenara Editorial - Entrar</title>
      </Head>
      <AuthLayout title="Entrar" subtitle="Bem vindo(a) de volta.">
        <SignInForm />
      </AuthLayout>
    </>
  )
}
