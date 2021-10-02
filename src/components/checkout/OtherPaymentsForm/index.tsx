import { FieldsRow, FieldsWrapper } from '@/components/form'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { Button } from '@/components/shared'
import { useCheckoutForm } from '@/contexts'
import { OtherPaymentsValues } from '@/models'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IdentificationDocumentFields } from '../IdentificationDocumentFields'
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
  paymentMethodId: string
}

export function OtherPaymentsForm({ paymentMethodId }: OtherPaymentsFormProps) {
  const formMethods = useForm<OtherPaymentsFormValues>({
    resolver: yupResolver(schema)
  })
  const { updateFormValues } = useCheckoutForm()

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
      paymentMethodId: paymentMethodId
    } as OtherPaymentsValues)
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
          <Button type="submit" id="form-checkout__submit">
            Continuar
          </Button>
        </FieldsWrapper>
      </RHFForm>
    </Container>
  )
}
