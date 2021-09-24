import { AuthLayout } from '@/components/layout'
import { NewPasswordForm } from '@/components/auth'

export function NewPasswordTemplate() {
  return (
    <AuthLayout title="Nova senha">
      <NewPasswordForm />
    </AuthLayout>
  )
}
