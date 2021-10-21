import {
  BooksDescription,
  HeroBanner,
  Quote,
  BooksGroup
} from '@/components/cartas-de-cristo'
import { NewsletterSignup } from '@/components/newsletter'
import { ProductCardModel } from '@/models'
import { Container } from './styles'

export type CartasDeCristoTemplateProps = {
  quote: string
  books: ProductCardModel[]
}

export function CartasDeCristoTemplate({
  quote,
  books
}: CartasDeCristoTemplateProps) {
  return (
    <Container>
      <HeroBanner />
      <Quote quote={quote} />
      <BooksDescription />
      <NewsletterSignup />
      <BooksGroup books={books} />
    </Container>
  )
}
