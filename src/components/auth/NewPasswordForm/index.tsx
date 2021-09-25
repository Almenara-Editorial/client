import { Button } from '@/components/shared'
import { Fields } from './styles'
import { useForm } from 'react-hook-form'
import { api } from '@/services'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { ErrorMessage } from '@/components/form/ErrorMessage'
import { getFormErrorMessageById } from '@/utils'

type NewPasswordFormValues = {
  password: string
  confirmPassword: string
}

export const NewPasswordForm = () => {
  const { query } = useRouter()
  const [submitError, setSubmitError] = useState<string | null>()
  const code = query.code?.toString()
  const formMethods = useForm<NewPasswordFormValues>({
    resolver: yupResolver(schema)
  })
  async function onSubmit(values: NewPasswordFormValues) {
    api
      .post('/auth/reset-password', {
        code,
        password: values.password,
        passwordConfirmation: values.confirmPassword
      })
      .then(({ data }) => {
        signIn('credentials', {
          email: data.user.email,
          password: values.password,
          callbackUrl: '/'
        })
      })
      .catch((error) => {
        setSubmitError(error.response.data.message[0].messages[0].id)
      })
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <Fields>
        <RHFTextField label="Senha" type="password" name="password" />
        <RHFTextField
          label="Confirmar senha"
          type="password"
          name="confirmPassword"
        />
        <div>
          <Button size="rg-full">Confirmar</Button>
          {submitError && (
            <ErrorMessage error={getFormErrorMessageById(submitError)} />
          )}
        </div>
      </Fields>
    </RHFForm>
  )
}
