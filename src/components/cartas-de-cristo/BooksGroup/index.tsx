import { ProductCard } from '@/components/products'
import { ProductCardModel } from '@/models'
import { Container, Title } from './styles'

type BooksGroupProps = {
  books: ProductCardModel[]
}

export const BooksGroup = ({ books }: BooksGroupProps) => (
  <Container>
    <Title>Adquira agora mesmo o seu:</Title>
    <div>
      {books?.map((book) => (
        <ProductCard product={book} key={book.id} withBuyButton />
      ))}
    </div>
  </Container>
)
