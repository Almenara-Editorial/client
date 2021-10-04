import { capitalizeFirstLetter } from '@/utils'
import { useSession } from 'next-auth/client'
import { Container } from './styles'

export function User() {
  const [session] = useSession()

  return (
    <Container>
      {session?.user?.name && (
        <span>Olá, {capitalizeFirstLetter(session.user.name)}</span>
      )}
    </Container>
  )
}
