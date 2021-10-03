import { FieldsRow, FieldsWrapper } from '@/components/form'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { useCheckoutForm } from '@/contexts'
import { OtherPaymentsValues } from '@/models'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IdentificationDocumentFields } from '../IdentificationDocumentFields'
import { StepsButtons } from '../StepsButtons'
import { schema } from './schema'
import { Container } from './styles'

type OtherPaymentsFormValues = {
  payerFirstName: string
  payerLastName: string
  payerEmail: string
  identificationType: string
  identificationNumber: string
}

type OtherPaymentsFormProps = {
  paymentTypeId: string
  paymentId: string
}

export function OtherPaymentsForm({
  paymentTypeId,
  paymentId
}: OtherPaymentsFormProps) {
  const { updateFormValues, formValues, nextStep } = useCheckoutForm()

  const formMethods = useForm<OtherPaymentsFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      payerFirstName: formValues.payment?.payer?.firstName,
      payerLastName: formValues.payment?.payer?.lastName,
      identificationNumber: formValues.payment?.payer?.identification.number,
      identificationType: formValues.payment?.payer?.identification.type,
      payerEmail: formValues.payment?.payer?.email
    }
  })
  async function onSubmit(values: OtherPaymentsFormValues) {
    updateFormValues('payment', {
      payer: {
        firstName: values.payerFirstName,
        lastName: values.payerLastName,
        email: values.payerEmail,
        identification: {
          number: values.identificationNumber,
          type: values.identificationType
        }
      },
      paymentTypeId: paymentTypeId,
      id: paymentId
    } as OtherPaymentsValues)

    nextStep()
  }

  return (
    <Container>
      <RHFForm {...formMethods} onSubmit={onSubmit}>
        <FieldsWrapper>
          <FieldsRow>
            <RHFTextField
              labelStyle="static"
              label="Nome"
              name="payerFirstName"
            />
            <RHFTextField
              labelStyle="static"
              label="Sobrenome"
              name="payerLastName"
            />
          </FieldsRow>
          <RHFTextField labelStyle="static" label="E-mail" name="payerEmail" />
          <IdentificationDocumentFields />
          <StepsButtons />
        </FieldsWrapper>
      </RHFForm>
    </Container>
  )
}
