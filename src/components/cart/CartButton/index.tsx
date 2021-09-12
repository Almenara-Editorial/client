import { ShopBag, ShopBagSolid } from '@/components/icons'
import { useCart } from '@/contexts'
import { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from 'react'
import { Container } from './styles'

type CartButtonProps = HTMLAttributes<HTMLButtonElement>

export const CartButtonFn: ForwardRefRenderFunction<
  HTMLButtonElement,
  CartButtonProps
> = (props, ref) => {
  const { cartItems } = useCart()
  const cartLength = cartItems?.length || 0

  return (
    <Container {...props} ref={ref}>
      {cartLength > 0 ? <ShopBagSolid /> : <ShopBag />}
      {cartLength > 0 && <span key={cartLength}>{cartLength}</span>}
    </Container>
  )
}

export const CartButton = forwardRef(CartButtonFn)
