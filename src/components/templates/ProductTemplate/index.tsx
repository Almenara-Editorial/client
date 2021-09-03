import { SingleProductBuyPanel, SingleProductImage, SingleProductDetails } from '@/components/products'
import { ProductModel } from '@/models'
import { Container, Main, Infos } from './styles'

export type ProductTemplateProps = {
  product: ProductModel
}

export function ProductTemplate({ product }: ProductTemplateProps) {
  return (
    <Container>
      <Main>
        <SingleProductImage src={product.imageSrc} />
        <SingleProductBuyPanel id={product.id} name={product.name} price={product.price} stock={product.stock} />
      </Main>
      <Infos>
        <SingleProductDetails description={product.description} particulars={product.particulars} />
      </Infos>
    </Container>
  )
}
