import { SingleProductModel } from '@/models'
import { NumberField } from '@/components/form'
import { Button, Hr } from '@/components/shared'
import { SingleProductPrice, SingleProductTitle, SelectAddressButton, ButtonWishlist } from '..'
import { Container, Bottom, QuantityBuy } from './styles'
import { useCart } from '@/contexts'
import { useState } from 'react'

export type SingleProductBuyPanelProps = Pick<SingleProductModel, 'id' | 'name' | 'price' | 'stock' | 'installments'>

export const SingleProductBuyPanel = ({ id, name, price, installments, stock }: SingleProductBuyPanelProps) => {
  const { addProductToCart, isInCart } = useCart()
  const itemInCart = isInCart(id)
  const [quantity, setQuantity] = useState(1)

  function handleQuantityChange(value: number) {
    setQuantity(value)
  }

  function handleAddProductToCart() {
    addProductToCart({ id, quantity })
  }

  return (
    <Container>
      <SingleProductTitle>{name}</SingleProductTitle>
      <Hr />
      <Bottom>
        <SingleProductPrice price={price} installments={installments} />
        <SelectAddressButton />
        <QuantityBuy>
          <NumberField value={quantity} min={1} onChange={handleQuantityChange} max={stock} />
          <Button size="rg-wide" onClick={handleAddProductToCart}>
            Comprar
          </Button>
        </QuantityBuy>
        <ButtonWishlist isInWishlist={false} />
      </Bottom>
    </Container>
  )
}

export default SingleProductBuyPanel
