import { CircleInfo } from '@/components/icons'
import { Container } from './styles'

export const ShippingWarning = () => (
  <Container>
    <p>
      O prazo de entrega pode variar conforme a forma de pagamento e a
      disponibilidade do produto em estoque. <CircleInfo />
    </p>
  </Container>
)
