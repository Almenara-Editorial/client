import { Container, Title } from './styles'
import { AccountSettingsForm } from '@/components/account'
import { DefaultSession, Session } from 'next-auth'

export type AccountSettingsTemplateProps = {
  user: DefaultSession['user']
  session: Session | null
}

export function AccountSettingsTemplate({
  user,
  session
}: AccountSettingsTemplateProps) {
  return (
    <Container>
      <Title>Alterar informações da conta</Title>
      <AccountSettingsForm session={session} user={user} />
    </Container>
  )
}
