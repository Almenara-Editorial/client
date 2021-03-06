import { NumberField } from '@/components/form'
import {
  ProductCardName,
  ProductCardPrice,
  ProductCardThumbnail
} from '@/components/products'
import { useCart } from '@/contexts'
import { CartProductModel } from '@/models'
import { useCallback } from 'react'
import { Container, Info, Actions, RemoveButton } from './styles'

type CartProductProps = {
  product: CartProductModel
}

export const CartProduct = ({ product }: CartProductProps) => {
  const { removeProductFromCart, addProductToCart } = useCart()

  const handleChange = useCallback(
    (quantity: number) => {
      addProductToCart({ id: product.id, quantity })
    },
    [addProductToCart, product.id]
  )

  return (
    <Container>
      <ProductCardThumbnail src={product.imageSrc[0]} />
      <div className="text">
        <Info>
          <ProductCardName textAlign="left" name={product.name} />
          <ProductCardPrice
            textAlign="left"
            price={product.price}
            promoPrice={product.promoPrice}
          />
        </Info>
        <Actions>
          <NumberField
            min={1}
            onChange={handleChange}
            value={product.quantity}
          />
          <RemoveButton onClick={() => removeProductFromCart(product.id)}>
            Remover
          </RemoveButton>
        </Actions>
      </div>
    </Container>
  )
}
