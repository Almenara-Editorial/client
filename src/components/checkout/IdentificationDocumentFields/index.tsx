import { FieldsRow } from '@/components/form'
import { RHFTextField } from '@/components/hook-form'
import { RHFSelect } from '@/components/hook-form/Select'
import { cpfCnpjMask } from '@/constants/masks'
import { useMercadoPago } from '@/hooks'

export function IdentificationDocumentFields() {
  const { identificationTypes } = useMercadoPago()

  return (
    <FieldsRow>
      <RHFSelect
        label="Tipo de documento"
        disabled={!identificationTypes || identificationTypes.length === 0}
        options={
          identificationTypes?.map((id) => ({
            value: id.id,
            text: id.name
          })) || []
        }
        name="identificationType"
      />
      <RHFTextField
        labelStyle="static"
        label="Número do documento"
        name="identificationNumber"
        mask={cpfCnpjMask}
      />
    </FieldsRow>
  )
}
