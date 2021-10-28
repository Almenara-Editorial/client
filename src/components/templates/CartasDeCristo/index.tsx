import {
  BooksDescription,
  HeroBanner,
  Quote,
  BooksGroup,
  BooksDownloads
} from '@/components/cartas-de-cristo'
import { NewsletterSignup } from '@/components/newsletter'
import { DownloadItem, ProductCardModel } from '@/models'
import { Container } from './styles'

export type CartasDeCristoTemplateProps = {
  quote: string
  books: ProductCardModel[]
  downloadItems: DownloadItem[]
}

export function CartasDeCristoTemplate({
  quote,
  books,
  downloadItems
}: CartasDeCristoTemplateProps) {
  return (
    <Container>
      <HeroBanner />
      <Quote quote={quote} />
      <BooksDescription />
      <BooksGroup books={books} />
      <BooksDownloads downloadItems={downloadItems} />
      <NewsletterSignup />
    </Container>
  )
}
