import { RHFForm, RHFTextField } from '@/components/hook-form'
import { Button } from '@/components/shared'
import { MUTATION_NEWSLETTER } from '@/graphql/mutations/newletter'
import { getFormErrorMessageById } from '@/utils'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Container, ErrorMessage } from './styles'

type NewsletterSignupFormValues = {
  email: string
  name: string
}

type NewsletterSignupFormProps = {
  onSignupSuccesful: () => void
}

export const NewsletterSignupForm = ({
  onSignupSuccesful
}: NewsletterSignupFormProps) => {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const formMethods = useForm<NewsletterSignupFormValues>()
  const [createNewsletter] = useMutation(MUTATION_NEWSLETTER, {
    onError: (err) => {
      const errorId =
        err?.graphQLErrors[0]?.extensions?.exception?.data?.message[0]
          .messages[0].id || err.message

      const errorMessage = getFormErrorMessageById(errorId)

      setSubmitError(errorMessage)
    },
    onCompleted: () => {
      onSignupSuccesful()
      setSubmitError(null)
    }
  })

  async function onSubmit(values: NewsletterSignupFormValues) {
    await createNewsletter({
      variables: {
        input: {
          data: {
            email: values.email,
            name: values.name
          }
        }
      }
    })
  }

  return (
    <RHFForm {...formMethods} onSubmit={onSubmit}>
      <Container>
        <RHFTextField placeholder="Seu nome:" name="name" />
        <RHFTextField placeholder="Seu email:" name="email" />
        <Button size="rg-narrow" outline color="white">
          Assinar
        </Button>
      </Container>
      {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
    </RHFForm>
  )
}

export default NewsletterSignupForm
