import { TextField } from '@/components/form'
import { Button } from '@/components/shared'
import { Form } from './styles'
import { useForm } from 'react-hook-form'
import { api } from '@/services'
import { useState } from 'react'
import { FormSuccess } from '../FormSuccess'

type ForgotPasswordFormValues = {
  email: string
}

export const ForgotPasswordForm = () => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { isSubmitting }
  } = useForm()
  async function onSubmit(values: ForgotPasswordFormValues) {
    await api
      .post('/auth/forgot-password', values)
      .then(({ data }) => {
        if (data.error) {
          console.log('Error', data)
        } else {
          setIsSubmitSuccessful(true)
        }
      })
      .catch((error) => console.log(error))
  }

  if (isSubmitSuccessful) {
    return <FormSuccess />
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField label="E-mail" {...register('email')} />
      <Button size="rg-full" isLoading={isSubmitting}>
        Enviar
      </Button>
    </Form>
  )
}
