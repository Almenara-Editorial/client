import { Quote as QuoteIcon } from '@/components/icons'
import { Container, Illustration, Text } from './styles'

type QuoteProps = {
  quote: string
}

export const Quote = ({ quote }: QuoteProps) => (
  <Container>
    <Illustration>
      <QuoteIcon />
    </Illustration>
    <Text>{quote && <p>{quote}</p>}</Text>
  </Container>
)
