import { Popover, Container } from './styles'
import { Popover as HeadlessPopover } from '@headlessui/react'
import { CartButton } from '@/components/cart'
import { CartDropdownProducts, CartDropdownTotal } from '..'
import { ButtonLink, Hr } from '@/components/shared'
import { useCart } from '@/contexts'
import { Fragment } from 'react'

export const CartDropdown = () => {
  const { cartItems } = useCart()

  return (
    <HeadlessPopover as={Fragment}>
      <Container>
        <HeadlessPopover.Button as={CartButton} />
        <HeadlessPopover.Panel as={Popover}>
          <CartDropdownProducts />
          <CartDropdownTotal />
          {cartItems && cartItems?.length > 0 && (
            <>
              <Hr space="lg" />
              <HeadlessPopover.Button href="/carrinho" as={ButtonLink}>
                Ir para carrinho
              </HeadlessPopover.Button>
            </>
          )}
        </HeadlessPopover.Panel>
      </Container>
    </HeadlessPopover>
  )
}

export default CartDropdown
