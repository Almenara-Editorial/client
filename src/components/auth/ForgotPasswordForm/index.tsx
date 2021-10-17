import { Button } from '@/components/shared'
import { Fields } from './styles'
import { useForm } from 'react-hook-form'
import { api } from '@/services'
import { useState } from 'react'
import { FormSuccess } from '../FormSuccess'
import { RHFForm, RHFTextField } from '@/components/hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schema'
import { ErrorMessage } from '@/components/form/ErrorMessage'
import { getFormErrorMessageById } from '@/utils'
import { useRouter } from 'next/router'

type ForgotPasswordFormValues = {
  email: string
}

export const ForgotPasswordForm = () => {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)
  const { query } = useRouter()
  const formMethods = useForm<ForgotPasswordFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: query?.email ? query.email.toString() : ''
    }
  })
  const {
    formState: { isSubmitting }
  } = formMethods
  async function onSubmit(values: ForgotPasswordFormValues) {
    setSubmitError(null)
    await api
      .post('/auth/forgot-password', values)
      .then(({ data }) => {
        if (data.error) {
          console.log('error', data)
        } else {
          setIsSubmitSuccessful(true)
        }
      })
      .catch((error) =>
        setSubmitError(error.response.data.message[0].messages[0].id)
      )
  }

  if (isSubmitSuccessful) {
    return <FormSuccess />
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <Fields>
        <RHFTextField label="E-mail" name="email" />
        <div>
          <Button size="rg-full" isLoading={isSubmitting}>
            Enviar
          </Button>
          {!!submitError && (
            <ErrorMessage
              align="center"
              error={getFormErrorMessageById(submitError)}
            />
          )}
        </div>
      </Fields>
    </RHFForm>
  )
}
