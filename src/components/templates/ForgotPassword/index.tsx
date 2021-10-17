import { AuthLayout } from '@/components/layout'
import { ForgotPasswordForm } from '@/components/auth'

export function ForgotPasswordTemplate() {
  return (
    <AuthLayout
      title="Recuperar/Alterar senha"
      subtitle="Digite seu e-mail que enviaremos um link para alteração de senha."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  )
}
