import { AuthLayout } from '@/components/layout'
import { RecoveryPasswordForm } from '@/components/auth'

export function RecoveryPasswordTemplate() {
  return (
    <AuthLayout
      title="Recuperar senha"
      subtitle="Digite seu e-mail que enviaremos um link para recuperação de senha."
    >
      <RecoveryPasswordForm />
    </AuthLayout>
  )
}
