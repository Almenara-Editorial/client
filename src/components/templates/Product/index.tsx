import {
  SingleProductBuyPanel,
  SingleProductImage,
  SingleProductDetails
} from '@/components/products'
import { ProductModel } from '@/models'
import { Container, Main, Infos } from './styles'

export type ProductTemplateProps = {
  product: ProductModel
}

export function ProductTemplate({ product }: ProductTemplateProps) {
  return (
    <Container>
      <Main>
        <SingleProductImage images={product.imageSrc} />
        <SingleProductBuyPanel
          id={product.id}
          authors={product.authors}
          name={product.name}
          price={product.price}
          promoPrice={product.promoPrice}
          stock={product.stock}
        />
      </Main>
      <Infos>
        <SingleProductDetails
          description={product.description}
          particulars={product.particulars}
        />
      </Infos>
    </Container>
  )
}
