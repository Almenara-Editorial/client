import { AuthLayout } from '@/components/layout'
import { SignInForm } from '@/components/auth'

export function SignInTemplate() {
  return (
    <AuthLayout title="Entrar" subtitle="Bem vindo(a) de volta.">
      <SignInForm />
    </AuthLayout>
  )
}
