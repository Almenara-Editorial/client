import { Container, Title } from './styles'
import { AccountSettingsForm } from '@/components/account'
import { DefaultSession } from 'next-auth'

export type AccountSettingsTemplateProps = {
  user: DefaultSession['user']
}

export function AccountSettingsTemplate({
  user
}: AccountSettingsTemplateProps) {
  return (
    <Container>
      <Title>Alterar informações da conta</Title>
      <AccountSettingsForm user={user} />
    </Container>
  )
}
