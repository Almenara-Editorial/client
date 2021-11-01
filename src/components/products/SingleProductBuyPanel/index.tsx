import { SingleProductModel } from '@/models'
import { NumberField } from '@/components/form'
import { Button, Hr } from '@/components/shared'
import {
  SingleProductPrice,
  SingleProductTitle,
  SelectAddressButton,
  ButtonWishlist
} from '..'
import { Container, Bottom, QuantityBuy } from './styles'
import { useCart } from '@/contexts'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { SingleProductAuthors } from '../SingleProductAuthors'

export type SingleProductBuyPanelProps = Pick<
  SingleProductModel,
  | 'id'
  | 'name'
  | 'price'
  | 'promoPrice'
  | 'stock'
  | 'installments'
  | 'authors'
  | 'disccounts'
>

export const SingleProductBuyPanel = ({
  id,
  name,
  price,
  authors,
  installments,
  disccounts,
  stock,
  promoPrice
}: SingleProductBuyPanelProps) => {
  const { addProductToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const { push } = useRouter()

  function handleQuantityChange(value: number) {
    setQuantity(value)
  }

  function handleAddProductToCart() {
    addProductToCart({ id, quantity })
    push('/carrinho')
  }

  return (
    <Container>
      <SingleProductTitle>{name}</SingleProductTitle>
      {authors?.length > 0 && (
        <SingleProductAuthors>
          <span>{authors.join(', ')}.</span>
        </SingleProductAuthors>
      )}
      <Hr />
      <Bottom>
        <SingleProductPrice
          quantity={quantity}
          disccounts={disccounts}
          price={price}
          promoPrice={promoPrice}
          installments={installments}
        />
        <SelectAddressButton product={{ id, quantity: 1 }} />
        <QuantityBuy>
          {stock > 0 ? (
            <>
              <NumberField
                value={quantity}
                min={1}
                onChange={handleQuantityChange}
                max={stock}
              />
              <Button size="rg-wide" onClick={handleAddProductToCart}>
                Comprar
              </Button>
            </>
          ) : (
            <Button size="rg-wide" outline>
              Avise-me quando chegar
            </Button>
          )}
        </QuantityBuy>
        <ButtonWishlist productId={id} />
      </Bottom>
    </Container>
  )
}

export default SingleProductBuyPanel
