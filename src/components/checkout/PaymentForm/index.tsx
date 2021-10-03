import { RadioGroup } from '@/components/form'
import { useCheckoutForm } from '@/contexts'
import { useState } from 'react'
import { CreditCardForm } from '../CreditCardForm'
import { OtherPaymentsForm } from '../OtherPaymentsForm'
import { Item, Thumbs } from './styles'

export function PaymentForm() {
  const { paymentMethods, formValues } = useCheckoutForm()
  const [activeForm, setActiveForm] = useState<string>(
    formValues.payment?.id || ''
  )

  return (
    <>
      <RadioGroup
        defaultValue={activeForm}
        onChange={setActiveForm}
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
              activeForm === 'credit_card' ? (
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
            content:
              activeForm === payment.id ? (
                <Item>
                  <OtherPaymentsForm
                    paymentId={payment.id}
                    paymentTypeId={payment.paymentTypeId}
                  />
                </Item>
              ) : null,
            value: payment.id
          }))
        ]}
      />
    </>
  )
}
