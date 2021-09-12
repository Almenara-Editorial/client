import { Hr } from '@/components/shared'
import { CustomScrollbar } from '@/components/shared/CustomScrollbar'
import { useCart } from '@/contexts'
import { Menu } from '@headlessui/react'
import { EmptyCartImage, CartDropdownProduct } from '..'
import { Container } from './styles'

export const CartDropdownProducts = () => {
  const { products, loading } = useCart()

  if (!products || products.length === 0)
    return (
      <Container>
        <EmptyCartImage />
        <span>Nada por aqui.</span>
      </Container>
    )

  return (
    <>
      <CustomScrollbar as={Container} autoHeight autoHeightMin="30rem">
        <Container>
          {products.map((product) => (
            <Menu.Item key={product.id}>
              {() => <CartDropdownProduct product={product} />}
            </Menu.Item>
          ))}
        </Container>
      </CustomScrollbar>
      <Hr space="lg" />
    </>
  )
}

export default CartDropdownProducts
