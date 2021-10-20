import {
  BooksDescription,
  HeroBanner,
  Quote
} from '@/components/cartas-de-cristo'
import { Container } from './styles'

export type CartasDeCristoTemplateProps = {}

export function CartasDeCristoTemplate() {
  return (
    <Container>
      <HeroBanner />
      <Quote />
      <BooksDescription />
    </Container>
  )
}
