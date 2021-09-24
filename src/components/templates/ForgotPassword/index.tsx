import { AuthLayout } from '@/components/layout'
import { ForgotPasswordForm } from '@/components/auth'

export function ForgotPasswordTemplate() {
  return (
    <AuthLayout
      title="Recuperar senha"
      subtitle="Digite seu e-mail que enviaremos um link para recuperação de senha."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  )
}
