import { Popover, Container } from './styles'
import { Menu } from '@headlessui/react'
import { CartButton } from '@/components/cart'
import { CartDropdownProducts, CartDropdownTotal } from '..'
import { Button, Hr } from '@/components/shared'
import { useCart } from '@/contexts'

export const CartDropdown = () => {
  const { products } = useCart()

  return (
    <Menu>
      <Container>
        <Menu.Button as={CartButton} />
        <Menu.Items as={Popover}>
          <CartDropdownProducts />
          <CartDropdownTotal />
          {products?.length > 0 && (
            <>
              <Hr space="lg" />
              <Button>Continuar para o checkout</Button>
            </>
          )}
        </Menu.Items>
      </Container>
    </Menu>
  )
}

export default CartDropdown
