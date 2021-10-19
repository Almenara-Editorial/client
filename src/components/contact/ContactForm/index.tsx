import { FieldsWrapper } from '@/components/form'
import { ErrorMessage } from '@/components/form/ErrorMessage'
import { RHFTextField, RHFTextArea, RHFForm } from '@/components/hook-form'
import { Button } from '@/components/shared'
import { MUTATION_CONTACT } from '@/graphql/mutations'
import { getFormErrorMessageById } from '@/utils'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Container, Title } from './styles'
import { schema } from './schema'
import { yupResolver } from '@hookform/resolvers/yup'

type ContactFormValues = {
  name: string
  email: string
  subject: string
  message: string
}

export const ContactForm = () => {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null)
  const formMethods = useForm<ContactFormValues>({
    resolver: yupResolver(schema)
  })
  const {
    reset,
    formState: { isSubmitting }
  } = formMethods

  const [createContact] = useMutation(MUTATION_CONTACT, {
    onError: (err) => {
      const errorId = err.message
      const errorMessage = getFormErrorMessageById(errorId)
      setSubmitSuccess(null)
      setSubmitError(errorMessage)
    },
    onCompleted: () => {
      setSubmitSuccess('Responderemos em breve')
      setSubmitError(null)
      reset()
    }
  })

  async function onSubmit(values: ContactFormValues) {
    await createContact({
      variables: {
        input: {
          data: values
        }
      }
    })
  }

  return (
    <Container>
      <Title>Entre em contato conosco</Title>
      <p>Preencha o formulário abaixo que entraremos em contato.</p>
      <RHFForm {...formMethods} onSubmit={onSubmit}>
        <FieldsWrapper>
          <RHFTextField name="name" label="Nome" />
          <RHFTextField name="email" label="E-mail" />
          <RHFTextField name="subject" label="Assunto" />
          <RHFTextArea name="message" label="Mensagem" />
        </FieldsWrapper>
        <Button isSuccess={!!submitSuccess} isLoading={isSubmitting}>
          {submitSuccess ? submitSuccess : 'Enviar'}
        </Button>
        {submitError && <ErrorMessage error={submitError} />}
      </RHFForm>
    </Container>
  )
}
