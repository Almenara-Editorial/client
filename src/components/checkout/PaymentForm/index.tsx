import { RadioGroup } from '@/components/form'
import { useCheckoutForm } from '@/contexts'
import { useEffect, useState } from 'react'
import { CreditCardForm } from '../CreditCardForm'
import { OtherPaymentsForm } from '../OtherPaymentsForm'
import { Item, Thumbs } from './styles'

// type PaymentFormValues = {
//   zipCode: string
//   street: string
//   number: string
//   info: string
//   city: string
// }

export function PaymentForm() {
  const { paymentMethods } = useCheckoutForm()
  const [activeForm, setActiveForm] = useState<string>('')

  return (
    <>
      <RadioGroup
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
                  <OtherPaymentsForm />
                </Item>
              ) : null,
            value: payment.id
          }))
        ]}
      />
    </>
  )
}
