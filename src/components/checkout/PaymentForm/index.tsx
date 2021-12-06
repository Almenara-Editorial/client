import { RadioGroup } from '@/components/form'
import { useCheckoutForm } from '@/contexts'
import { CreditCardPaymentValues } from '@/models'
import { useCallback, useState } from 'react'
import { CreditCardForm } from '../CreditCardForm'
import { StepsButtons } from '../StepsButtons'
import { Container, Item, Thumbs } from './styles'

export function PaymentForm() {
  const { paymentMethods, formValues, updateFormValues, nextStep } =
    useCheckoutForm()
  const [activePayment, setActivePayment] = useState<string>(
    formValues.payment?.paymentTypeId || ''
  )

  function handleNextStep() {
    nextStep()
  }

  const handleChangeActivePayment = useCallback((payment: string) => {
    setActivePayment(payment)
    updateFormValues('payment', {
      id: activePayment
    } as CreditCardPaymentValues)
  }, [activePayment, updateFormValues])

  return (
    <Container>
      <RadioGroup
        defaultValue={formValues?.payment?.id}
        onChange={handleChangeActivePayment}
        radios={[
          {
            title: (
              <Item>
                Cartão de crédito
                <Thumbs>
                  {paymentMethods?.creditCards?.map((card) => (
                    <img key={card.thumbnail} src={card.thumbnail} />
                  ))}
                </Thumbs>
              </Item>
            ),
            content:
              activePayment === 'credit_card' ? (
                <Item>
                  <CreditCardForm />
                </Item>
              ) : null,
            value: 'credit_card'
          },
          ...paymentMethods?.availableMethods?.map((payment) => ({
            title: (
              <Item>
                <img src={payment.thumbnail} />
                {payment.name}
              </Item>
            ),
            value: payment.id
          }))
        ]}
      />
      {activePayment !== 'credit_card' && (
        <StepsButtons onClickNext={handleNextStep} />
      )}
    </Container>
  )
}
