import { NumberField } from '@/components/form'
import { ProductCardPrice } from '@/components/products'
import { Anchor, Image } from '@/components/shared'
import { useCart } from '@/contexts'
import { CartProductModel } from '@/models'
import { useCallback, useState } from 'react'
import { Container, Details, ProductName, Thumbnail } from './styles'

export type CartDropdownProductProps = {
  product: CartProductModel
}

export const CartDropdownProduct = ({ product }: CartDropdownProductProps) => {
  const { addProductToCart, removeProductFromCart } = useCart()
  const [isRemoving, setIsRemoving] = useState(false)

  const handleChange = useCallback(
    (quantity: number) => {
      addProductToCart({ id: product.id, quantity })
    },
    [addProductToCart, product.id]
  )

  function handleRemoveProduct() {
    setIsRemoving(true)
    removeProductFromCart(product.id)
  }

  return (
    <Container data-removing={isRemoving}>
      <Thumbnail>
        {product.imageSrc && (
          <Image
            src={product.imageSrc[0] as string}
            width="80"
            height="117"
            objectFit="contain"
          />
        )}
      </Thumbnail>
      <Details>
        <ProductName>{product.name}</ProductName>
        <ProductCardPrice
          price={product.price}
          promoPrice={product.promoPrice}
        />
        <NumberField
          min={1}
          value={product.quantity}
          max={product.stock}
          onChange={handleChange}
        />
        <div>
          <Anchor
            as="button"
            type="button"
            size="sm"
            color="light"
            onClick={handleRemoveProduct}
          >
            Remover
          </Anchor>
        </div>
      </Details>
    </Container>
  )
}

export default CartDropdownProduct
