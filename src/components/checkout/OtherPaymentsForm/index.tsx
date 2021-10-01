import { FieldsRow, FieldsWrapper } from '@/components/form'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { Button } from '@/components/shared'
import { useForm } from 'react-hook-form'
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
            <RHFTextField label="Nome" name="payerFirstName" />
            <RHFTextField label="Sobrenome" name="payerLastName" />
          </FieldsRow>
          <RHFTextField label="E-mail" name="payerEmail" />
          <FieldsRow>
            <RHFTextField label="Primeiro nome" name="docType" />
            <RHFTextField label="Primeiro nome" name="docNumber" />
          </FieldsRow>
          <Button type="submit" id="form-checkout__submit">
            Continuar
          </Button>
        </FieldsWrapper>
      </RHFForm>
    </Container>
  )
}
