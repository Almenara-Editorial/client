import { Header } from '..'
import { Container, Content } from './styles'

type CheckoutLayoutProps = {
  children: React.ReactNode
}

export const CheckoutLayout = ({ children }: CheckoutLayoutProps) => (
  <Container>
    <Header />
    <Content>{children}</Content>
  </Container>
)
