import { Hr } from '@/components/shared'
import { useCart } from '@/contexts'
import { Menu } from '@headlessui/react'
import { EmptyCartImage, CartDropdownProduct } from '..'
import { Container } from './styles'

export const CartDropdownProducts = () => {
  const { products } = useCart()

  // if (!products || products.length === 0)
  //   return (
  //     <Container>
  //       <EmptyCartImage />
  //       <span>Nada por aqui.</span>
  //     </Container>
  //   )

  return (
    <>
      <Container>
        {products.map((product) => (
          <Menu.Item key={product.id}>{() => <CartDropdownProduct product={product} />}</Menu.Item>
        ))}
      </Container>
      <Hr space="lg" />
    </>
  )
}

export default CartDropdownProducts
