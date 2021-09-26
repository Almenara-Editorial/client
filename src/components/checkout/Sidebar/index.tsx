import { Hr } from '@/components/shared'
import { CheckoutProducts, CheckoutTotal } from '..'
import { Container, Title } from './styles'

export function Sidebar() {
  return (
    <Container>
      <Title>Sumário</Title>
      <CheckoutProducts />
      <Hr space="xl" />
      <CheckoutTotal />
    </Container>
  )
}
