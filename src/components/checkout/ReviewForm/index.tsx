import { FieldsWrapper } from '@/components/form'
import { RHFForm, RHFTextArea } from '@/components/hook-form'
import { PaymentCard, PaymentCardId } from '@/components/shared'
import { useCart, useCheckoutForm } from '@/contexts'
import { createOrder } from '@/services'
import { useForm } from 'react-hook-form'
import { SectionTitle } from '..'
import { ReviewCard } from '../ReviewCard'
import { StepsButtons } from '../StepsButtons'
import { Container, Cards } from './styles'

type ReviewFormValues = {
  comments: string
}

export function ReviewForm() {
  const { products } = useCart()
  const formMethods = useForm<ReviewFormValues>()
  const {
    formState: { isSubmitting }
  } = formMethods
  const {
    nextStep,
    formValues,
    session,
    setCreatedOrder,
    setCreateOrderError
  } = useCheckoutForm()
  const { shipping, payment } = formValues

  async function onSubmit(values: ReviewFormValues) {
    return await createOrder({
      order: { ...formValues, review: { comments: values.comments } },
      token: session?.jwt as string,
      cart: products
    })
      .then((order) => {
        setCreateOrderError(null)
        setCreatedOrder(order)
        nextStep()
      })
      .catch((error) => {
        console.log({ error })
        setCreatedOrder(null)
        setCreateOrderError(error.response?.data || error.message || error)
      })
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <Container>
        <div>
          <SectionTitle title="Resumo:" />
          <Cards>
            <ReviewCard
              title="Entrega:"
              content={
                <>
                  <div>
                    {shipping?.street}, {shipping?.number}
                  </div>
                  <div>
                    {shipping?.city} - {shipping?.state}
                  </div>
                </>
              }
            />
            <ReviewCard
              title="Pagamento:"
              content={
                <>
                  <PaymentCard
                    paymentId={(payment?.id as PaymentCardId) || 'other'}
                    lastFour={payment?.cardNumber?.slice(-4)}
                  />
                  <div>{payment?.installmentsText}</div>
                </>
              }
            />
          </Cards>
        </div>
        <FieldsWrapper>
          <RHFTextArea label="Observa????es para o pedido:" name="comments" />
        </FieldsWrapper>
        <StepsButtons
          hideConfirmButton={payment?.id === "paypal"}
          showPaypalButton={payment?.id === "paypal"}
          nextStepButtonText="Confirmar pedido"
          isLoadingNextStep={isSubmitting}
        />
      </Container>
    </RHFForm>
  )
}
