import { Checkmark, ShopBagAdd } from '@/components/icons'
import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

type ButtonAddToCartProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  isInCart: boolean
}

export const ButtonAddToCart = ({ isInCart, ...rest }: ButtonAddToCartProps) => (
  <Container data-isincart={isInCart} aria-label={isInCart ? 'Adicionar ao carrinho' : 'Remover do carrinho'} {...rest}>
    {!isInCart ? <ShopBagAdd aria-label="cart icon" /> : <Checkmark aria-label="checkmark icon" />}
    <span>{!isInCart ? 'Adicionar ao carrinho' : 'Adicionado'}</span>
  </Container>
)

export default ButtonAddToCart
