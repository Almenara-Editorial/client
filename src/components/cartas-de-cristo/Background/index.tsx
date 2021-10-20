import { Image } from '@/components/shared'
import { Container } from './styles'

export const Background = () => (
  <Container>
    <Image
      src="/img/cartas-de-cristo-bg.jpg"
      quality="100"
      layout="fill"
      objectFit="cover"
    />
  </Container>
)
