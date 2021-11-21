import { Container, Title } from './styles'
import { AccountSettingsForm } from '@/components/account'
import { Session } from 'next-auth'
import { QueryUser_me } from '@/graphql/generated/QueryUser'

export type AccountSettingsTemplateProps = {
  user: QueryUser_me
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
