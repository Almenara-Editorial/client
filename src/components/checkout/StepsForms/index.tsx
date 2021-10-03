import { useCheckoutForm } from '@/contexts'
import { PaymentForm } from '../PaymentForm'
import { ReviewForm } from '../ReviewForm'
import { ShippingForm } from '../ShippingForm'
import { Success } from '../Success'
import { Container } from './styles'

export const StepsForms = () => {
  const { currentStep } = useCheckoutForm()

  return (
    <Container>
      {currentStep === 'shipping' && <ShippingForm />}
      {currentStep === 'payment' && <PaymentForm />}
      {currentStep === 'review' && <ReviewForm />}
      {currentStep === 'success' && <Success />}
    </Container>
  )
}
