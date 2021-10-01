import { FieldsRow } from '@/components/form'
import { RHFTextField } from '@/components/hook-form'
import { RHFSelect } from '@/components/hook-form/Select'
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
        label="Número do documento"
        name="identificationNumber"
        mask={['999.999.999-99', '99. 999. 999/9999-99']}
      />
    </FieldsRow>
  )
}
