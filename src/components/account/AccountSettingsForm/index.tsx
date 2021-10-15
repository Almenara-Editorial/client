import { Button } from '@/components/shared'
import { useForm } from 'react-hook-form'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@/components/form/ErrorMessage'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { useState } from 'react'
import { FieldsWrapper } from '@/components/form'
import { DefaultSession } from 'next-auth'

type AccountSettingsFormValues = {
  fullName: string
  email: string
}

type AccountSettingsFormProps = {
  user: DefaultSession['user']
}

export const AccountSettingsForm = ({ user }: AccountSettingsFormProps) => {
  const [formSuccess, setFormSuccess] = useState('')
  const [formError, setFormError] = useState('')
  const formMethods = useForm<AccountSettingsFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: (user?.name as string) || '',
      email: (user?.email as string) || ''
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
        <RHFTextField label="Nome completo" name="fullName" />
        <RHFTextField label="E-mail" name="email" />
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
