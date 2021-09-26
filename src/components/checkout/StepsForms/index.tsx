import { useCheckoutForm } from '@/contexts'
import { PaymentForm } from '../PaymentForm'
import { ReviewForm } from '../ReviewForm'
import { ShippingForm } from '../ShippingForm'
import { Container } from './styles'

export const StepsForms = () => {
  const { currentStep } = useCheckoutForm()

  return (
    <Container>
      {currentStep === 'shipping' && <ShippingForm />}
      {currentStep === 'payment' && <PaymentForm />}
      {currentStep === 'review' && <ReviewForm />}
    </Container>
  )
}
