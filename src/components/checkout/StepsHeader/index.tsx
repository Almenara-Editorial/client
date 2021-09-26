import { useCheckoutForm } from '@/contexts'
import { StepsHeaderItem } from '../StepsHeaderItem'
import { Container } from './styles'

export const StepsHeader = () => {
  const { currentStep } = useCheckoutForm()

  return (
    <Container>
      <StepsHeaderItem
        stepNumber={1}
        title="Entrega"
        active={currentStep === 'shipping'}
      />
      <StepsHeaderItem
        stepNumber={2}
        title="Pagamento"
        active={currentStep === 'payment'}
      />
      <StepsHeaderItem
        stepNumber={3}
        title="Revisão"
        active={currentStep === 'review'}
      />
    </Container>
  )
}
