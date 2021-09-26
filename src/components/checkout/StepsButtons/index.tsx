import { Button } from '@/components/shared'
import { useCheckoutForm } from '@/contexts'
import { Container } from './styles'

type StepsButtonsProps = {
  onClickNext?: () => void
}

export const StepsButtons = ({ onClickNext }: StepsButtonsProps) => {
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
        <Button
          size="rg-full"
          type={onClickNext ? 'button' : 'submit'}
          onClick={onClickNext}
        >
          Continuar
        </Button>
      </div>
    </Container>
  )
}
