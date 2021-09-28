import { Heart, HeartSolid } from '@/components/icons'
import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

type ButtonWishlistProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isInWishlist: boolean
}

export const ButtonWishlist = ({
  isInWishlist,
  ...rest
}: ButtonWishlistProps) => {
  const label = !isInWishlist
    ? 'Adicionar à lista de desejos'
    : 'Remover da lista de desejos'

  return (
    <Container aria-label={label} data-isinwishlist={isInWishlist} {...rest}>
      {!isInWishlist ? <Heart /> : <HeartSolid />}
      {label}
    </Container>
  )
}

export default ButtonWishlist
