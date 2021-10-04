import { useCart, useCheckoutForm } from '@/contexts'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { StepsHeader, StepsForms } from '..'
import { Container } from './styles'

export const Steps = () => {
  const { cartLength } = useCart()
  const { createdOrder, createOrderError } = useCheckoutForm()
  const { query, push } = useRouter()

  useEffect(() => {
    if (cartLength === 0 && query.step !== 'success') {
      push('/')
    }
  }, [cartLength, query, push, createdOrder, createOrderError])

  return (
    <Container>
      <StepsHeader />
      <StepsForms />
    </Container>
  )
}
