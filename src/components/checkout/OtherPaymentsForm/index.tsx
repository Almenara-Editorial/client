import { FieldsRow, FieldsWrapper } from '@/components/form'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { Button } from '@/components/shared'
import { useMercadoPago } from '@/hooks'
import { useForm } from 'react-hook-form'
import { IdentificationDocumentFields } from '../IdentificationDocumentFields'
import { Container } from './styles'

type OtherPaymentsFormValues = {
  payerFirstName: string
  payerLastName: string
  payerEmail: string
  docType: string
  docNumber: string
}

export function OtherPaymentsForm() {
  const formMethods = useForm<OtherPaymentsFormValues>()

  async function onSubmit(values: OtherPaymentsFormValues) {
    console.log(values)
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
