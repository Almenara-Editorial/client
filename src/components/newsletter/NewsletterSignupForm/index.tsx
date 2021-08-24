import { TextField } from '@/components/form'
import { Button } from '@/components/shared'
import { Container } from './styles'

export const NewsletterSignupForm = () => (
  <Container>
    <TextField placeholder="Seu nome:" name="name" />
    <TextField placeholder="Seu email:" name="email" />
    <Button size="rg-narrow" outline color="white">
      Assinar
    </Button>
  </Container>
)

export default NewsletterSignupForm
