import { AccountSidebar } from '@/components/account'
import { Container, Content } from './styles'

type AccountLayoutProps = {
  children: React.ReactNode
}

export function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <Container>
      <AccountSidebar />
      <Content>{children}</Content>
    </Container>
  )
}
