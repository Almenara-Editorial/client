import { FieldsWrapper } from '@/components/form'
import { RHFForm, RHFTextArea } from '@/components/hook-form'
import { useCheckoutForm } from '@/contexts'
import { useForm } from 'react-hook-form'
import { SectionTitle } from '..'
import { StepsButtons } from '../StepsButtons'

type ReviewFormValues = {
  comments: string
}

export function ReviewForm() {
  const formMethods = useForm<ReviewFormValues>()
  const { nextStep } = useCheckoutForm()

  async function onSubmit(values: ReviewFormValues) {
    console.log('reviewForm', values)

    nextStep()
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <SectionTitle title="Cartão de crédito:" />
      <FieldsWrapper>
        <RHFTextArea label="Observações para o pedido:" name="comments" />
      </FieldsWrapper>
      <StepsButtons />
    </RHFForm>
  )
}
