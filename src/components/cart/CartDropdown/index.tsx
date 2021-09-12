import { Popover, Container } from './styles'
import { Menu } from '@headlessui/react'
import { CartButton } from '@/components/cart'
import { CartDropdownProducts, CartDropdownTotal } from '..'
import { Button, Hr } from '@/components/shared'
import { useCart } from '@/contexts'
import { useRouter } from 'next/router'

export const CartDropdown = () => {
  const { cartItems } = useCart()
  const router = useRouter()

  return (
    <Menu>
      <Container>
        <Menu.Button as={CartButton} />
        <Menu.Items as={Popover}>
          <CartDropdownProducts />
          <CartDropdownTotal />
          {cartItems && cartItems?.length > 0 && (
            <>
              <Hr space="lg" />
              <Button onClick={() => router.push('/carrinho')}>
                Ir para carrinho
              </Button>
            </>
          )}
        </Menu.Items>
      </Container>
    </Menu>
  )
}

export default CartDropdown
