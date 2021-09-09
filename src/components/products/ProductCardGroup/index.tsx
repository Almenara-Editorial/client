import { Link } from '@/components/shared'
import { ProductsCardsGroupModel } from '@/models'
import { ProductCard } from '..'
import { ProductCardGroupTitle } from '../ProductCardGroupTitle'
import { Container, Products } from './styles'

export type ProductsCardsGroupProps = {
  productGroup: ProductsCardsGroupModel
}

export const ProductsCardsGroup = ({ productGroup }: ProductsCardsGroupProps) => (
  <Container>
    {productGroup?.title && <ProductCardGroupTitle>{productGroup.title}</ProductCardGroupTitle>}
    <Products>
      {productGroup.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Products>
    {productGroup.seeMore && <Link href={productGroup.seeMore.url}>{productGroup.seeMore.name}</Link>}
  </Container>
)
