import { ProductCardModel } from '@/models'
import ProductCard from '../ProductCard'
import { Container, Empty } from './styles'

type ProductsCardsGroupProps = {
  products: ProductCardModel[]
}

export const ProductsCards = ({ products }: ProductsCardsGroupProps) => {
  if (products?.length === 0)
    return (
      <Empty>
        <p>Nenhum resultado para a pesquisa.</p>
      </Empty>
    )

  return (
    <Container>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  )
}

export default ProductsCards
