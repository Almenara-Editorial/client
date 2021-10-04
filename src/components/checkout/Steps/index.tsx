import { useCart, useCheckoutForm } from '@/contexts'
import { StepsHeader, StepsForms } from '..'
import { Container } from './styles'

export const Steps = () => {
  const { cartLength } = useCart()
  const { createdOrder, createOrderError } = useCheckoutForm()

  if (cartLength === 0 && !createdOrder && !createOrderError) {
    return null
  }

  return (
    <Container>
      <StepsHeader />
      <StepsForms />
    </Container>
  )
}
