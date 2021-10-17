import { Button } from '@/components/shared'
import { useForm } from 'react-hook-form'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@/components/form/ErrorMessage'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { useState } from 'react'
import { FieldsWrapper } from '@/components/form'
import { DefaultSession } from 'next-auth'
import { useMutation } from '@apollo/client'
import { MUTATION_UPDATE_USER } from '@/graphql/mutations'
import { signOut, useSession } from 'next-auth/client'

type AccountSettingsFormValues = {
  fullName: string
  email: string
}

type AccountSettingsFormProps = {
  user: DefaultSession['user']
}

export const AccountSettingsForm = ({ user }: AccountSettingsFormProps) => {
  const [session] = useSession()
  const [formSuccess, setFormSuccess] = useState<null | string>('')
  const [formError, setFormError] = useState<null | string>('')
  const formMethods = useForm<AccountSettingsFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: (user?.name as string) || '',
      email: (user?.email as string) || ''
    }
  })
  const [updateAccount, { error, loading }] = useMutation(
    MUTATION_UPDATE_USER,
    {
      context: { session },
      onError: (err) => {
        const errorId =
          err?.graphQLErrors[0]?.extensions?.exception?.data?.message[0]
            .messages[0]?.id
        errorId &&
          setFormError(
            'Houve um problema ao atualizar as informações de usuário'
          )
      },
      onCompleted: () => {
        setFormError(null)
        !error && setFormSuccess('Informações atualizadas')
        signOut()
      }
    }
  )

  async function onSubmit(values: AccountSettingsFormValues) {
    await updateAccount({
      variables: {
        input: {
          where: {
            id: '53'
          },
          data: values
        }
      }
    })
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <FieldsWrapper>
        <RHFTextField label="Nome completo" name="fullName" />
        <RHFTextField label="E-mail" name="email" />
        <div>
          <Button
            type="submit"
            size="rg-full"
            isLoading={loading}
            isSuccess={!!formSuccess}
          >
            {formSuccess ? 'Atualizado' : 'Enviar'}
          </Button>
          {formError && <ErrorMessage error={formError} />}
        </div>
      </FieldsWrapper>
    </RHFForm>
  )
}
