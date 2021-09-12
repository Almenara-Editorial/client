import { NumberField } from '@/components/form'
import {
  ProductCardName,
  ProductCardPrice,
  ProductCardThumbnail
} from '@/components/products'
import { CartProductModel } from '@/models'
import { Container, Info, Actions, RemoveButton } from './styles'

type CartProductProps = {
  product: CartProductModel
}

export const CartProduct = ({ product }: CartProductProps) => (
  <Container>
    <ProductCardThumbnail src={product.imageSrc} />
    <Info>
      <ProductCardName name={product.name} />
      <ProductCardPrice price={product.price} />
    </Info>
    <Actions>
      <NumberField min={1} value={product.quantity} />
      <RemoveButton>Remover</RemoveButton>
    </Actions>
  </Container>
)
