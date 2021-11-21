import { Button, ButtonLink } from '@/components/shared'
import { useForm } from 'react-hook-form'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@/components/form/ErrorMessage'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { useState } from 'react'
import { FieldsWrapper, TextField } from '@/components/form'
import { Session } from 'next-auth'
import { ButtonGroup } from './styles'
import { updateUser } from '@/services'
import { cpfCnpjMask } from '@/constants/masks'
import { QueryUser_me } from '@/graphql/generated/QueryUser'

type AccountSettingsFormValues = {
  fullName: string
  documentNumber: string
}

type AccountSettingsFormProps = {
  user: QueryUser_me
  session: Session | null
}

export const AccountSettingsForm = ({
  user,
  session
}: AccountSettingsFormProps) => {
  const [formSuccess, setFormSuccess] = useState<null | string>('')
  const [formError, setFormError] = useState<null | string>('')
  const formMethods = useForm<AccountSettingsFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: (user?.fullName as string) || '',
      documentNumber: (user?.documentNumber as string) || ''
    }
  })
  const {
    reset,
    formState: { isSubmitting }
  } = formMethods

  async function onSubmit(values: AccountSettingsFormValues) {
    return updateUser(values, (session?.jwt as string) || '')
      .then((data) => {
        setFormSuccess('Atualizado')
        reset({
          fullName: data.fullName,
          documentNumber: data.documentNumber
        })
      })
      .catch(() => setFormError('Ocorreu um erro ao atualizar o perfil'))
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <FieldsWrapper>
        <RHFTextField label="Nome completo" name="fullName" />
        <RHFTextField
          label="CPF/CNPJ"
          name="documentNumber"
          mask={cpfCnpjMask}
        />
        <TextField label="E-mail" disabled value={user?.email || ''} />
        <ButtonGroup>
          <ButtonLink
            outline
            href={`/recuperar-senha?email=${user?.email || ''}`}
          >
            Alterar senha
          </ButtonLink>
          <Button
            type="submit"
            isLoading={isSubmitting}
            isSuccess={!!formSuccess}
          >
            {formSuccess ? 'Atualizado' : 'Enviar'}
          </Button>
          {formError && <ErrorMessage error={formError} />}
        </ButtonGroup>
      </FieldsWrapper>
    </RHFForm>
  )
}
