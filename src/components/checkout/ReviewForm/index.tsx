import { FieldsWrapper } from '@/components/form'
import { RHFForm, RHFTextArea } from '@/components/hook-form'
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
  const { nextStep, updateFormValues, formValues, session } = useCheckoutForm()
  const { shipping, payment } = formValues

  async function onSubmit(values: ReviewFormValues) {
    updateFormValues('review', values)

    await createOrder({
      order: formValues,
      token: session?.jwt as string,
      cart: products
    })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => console.log(error))

    nextStep()
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
                  <div>{payment?.id}</div>
                  <div>**** **** **** {payment?.cardNumber?.slice(-4)}</div>
                  <div>{payment?.installmentsText}</div>
                </>
              }
            />
          </Cards>
        </div>
        <FieldsWrapper>
          <RHFTextArea label="Observações para o pedido:" name="comments" />
        </FieldsWrapper>
        <StepsButtons
          nextStepButtonText="Confirmar pedido"
          isLoadingNextStep={isSubmitting}
        />
      </Container>
    </RHFForm>
  )
}
