import { RadioGroup } from '@/components/form'
import { useCheckoutForm } from '@/contexts'
import { CreditCardPaymentValues } from '@/models'
import { useEffect, useState } from 'react'
import { CreditCardForm } from '../CreditCardForm'
import { OtherPaymentsForm } from '../OtherPaymentsForm'
import { Item, Thumbs } from './styles'

export function PaymentForm() {
  const { paymentMethods, formValues, updateFormValues } = useCheckoutForm()
  const [activeForm, setActiveForm] = useState<string>(
    formValues.payment?.id || ''
  )

  useEffect(() => {
    activeForm !== formValues?.payment?.id &&
      updateFormValues('payment', { id: activeForm } as CreditCardPaymentValues)
  }, [activeForm, formValues?.payment?.id, updateFormValues])

  return (
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
                <CreditCardForm paymentId="credit_card" />
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
  )
}
