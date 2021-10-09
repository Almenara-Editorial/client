import { CheckCircle } from '@/components/icons'
import { useState } from 'react'
import { NewsletterSignupHeader } from '..'
import NewsletterSignupForm from '../NewsletterSignupForm'

import { Container, Wrapper, SuccessIcon } from './styles'

export const NewsletterSignup = () => {
  const [submitSuccessful, setSubmitSuccessful] = useState(false)

  function onSignupSuccesful() {
    setSubmitSuccessful(true)
  }

  return (
    <Container>
      <Wrapper>
        {!submitSuccessful ? (
          <>
            <NewsletterSignupHeader />
            <NewsletterSignupForm onSignupSuccesful={onSignupSuccesful} />
          </>
        ) : (
          <>
            <SuccessIcon>
              <CheckCircle />
              <span>Obrigado por se inscrever.</span>
            </SuccessIcon>
          </>
        )}
      </Wrapper>
    </Container>
  )
}

export default NewsletterSignup
