import { Checkmark, ShopBagAdd } from '@/components/icons'
import { useCart } from '@/contexts'
import { Container } from './styles'

type ButtonAddToCartProps = {
  productId: string
}

export const ButtonAddToCart = ({ productId }: ButtonAddToCartProps) => {
  const { addProductToCart, isInCart } = useCart()
  const inCart = isInCart(productId)

  return (
    <Container
      data-isincart={inCart}
      aria-label={inCart ? 'Adicionar ao carrinho' : 'Remover do carrinho'}
      onClick={() => addProductToCart({ id: productId, quantity: 1 })}
    >
      {!inCart ? (
        <ShopBagAdd aria-label="cart icon" />
      ) : (
        <Checkmark aria-label="checkmark icon" />
      )}
      <span>{!inCart ? 'Adicionar ao carrinho' : 'Adicionado'}</span>
    </Container>
  )
}

export default ButtonAddToCart
