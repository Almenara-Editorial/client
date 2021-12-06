import { Button } from '@/components/shared'
import { useCheckoutForm } from '@/contexts'
import { PayPalButton } from '../PayPalButton'
import { Container } from './styles'

type StepsButtonsProps = {
  onClickNext?: () => void
  isLoadingNextStep?: boolean
  nextStepButtonText?: string
  hideConfirmButton?: boolean
  showPaypalButton?: boolean
}

export const StepsButtons = ({
  onClickNext,
  isLoadingNextStep,
  hideConfirmButton,
  showPaypalButton,
  nextStepButtonText = 'Continuar'
}: StepsButtonsProps) => {
  const { prevStep } = useCheckoutForm()

  return (
    <Container>
      <div>
        <Button
          size="rg-full"
          outline
          color="neutral"
          onClick={prevStep}
          type="button"
        >
          Voltar
        </Button>
      </div>
      <div>
        {!hideConfirmButton && (
          <Button
            size="rg-full"
            type={onClickNext ? 'button' : 'submit'}
            onClick={onClickNext}
            isLoading={isLoadingNextStep}
          >
            {nextStepButtonText}
          </Button>
        )}
        {showPaypalButton && <PayPalButton />}
      </div>
    </Container>
  )
}
