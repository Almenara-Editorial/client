import { NewsletterSignupHeader } from '..'
import NewsletterSignupForm from '../NewsletterSignupForm'

import { Container, Wrapper } from './styles'

export const NewsletterSignup = () => (
  <Container>
    <Wrapper>
      <NewsletterSignupHeader />
      <NewsletterSignupForm />
    </Wrapper>
  </Container>
)

export default NewsletterSignup
