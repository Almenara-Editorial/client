import { AuthLayout } from '@/components/layout'
import { SignUpForm } from '@/components/auth'

export function SignUpTemplate() {
  return (
    <AuthLayout title="Cadastrar-se">
      <SignUpForm />
    </AuthLayout>
  )
}
