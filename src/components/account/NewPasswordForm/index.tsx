import { Button } from '@/components/shared'
import { useForm } from 'react-hook-form'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@/components/form/ErrorMessage'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { useState } from 'react'
import { FieldsWrapper } from '@/components/form'

type AccountSettingsFormValues = {
  currentPassword: string
  newPassword: string
  newPasswordConfirmation: string
}

export const AccountSettingsForm = () => {
  const [formSuccess, setFormSuccess] = useState('')
  const [formError, setFormError] = useState('')
  const formMethods = useForm<AccountSettingsFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirmation: ''
    }
  })
  const {
    formState: { isSubmitting }
  } = formMethods

  async function onSubmit(values: AccountSettingsFormValues) {
    console.log(values)
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <FieldsWrapper>
        <RHFTextField
          label="Senha atual"
          type="password"
          name="currentPassword"
        />
        <RHFTextField label="Nova senha:" type="password" name="newPassword" />
        <RHFTextField
          label="Confirme a nova senha:"
          type="password"
          name="newPasswordConfirmation"
        />

        <div>
          <Button
            size="rg-full"
            isLoading={isSubmitting}
            isSuccess={!!formSuccess}
          >
            Enviar
          </Button>
          {formError && <ErrorMessage error={formError} />}
        </div>
      </FieldsWrapper>
    </RHFForm>
  )
}
