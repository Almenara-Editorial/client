import { SingleProductBuyPanel, SingleProductImage } from '@/components/products'
import { ProductModel } from '@/models'
import { Container, Main } from './styles'

export type ProductTemplateProps = {
  product: ProductModel
}

export function ProductTemplate({ product }: ProductTemplateProps) {
  return (
    <Container>
      <Main>
        <SingleProductImage src={product.imageSrc} />
        <SingleProductBuyPanel name={product.name} price={product.price} stock={product.stock} />
      </Main>
    </Container>
  )
}
