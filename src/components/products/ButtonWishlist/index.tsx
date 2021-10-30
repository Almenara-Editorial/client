import { Heart, HeartSolid } from '@/components/icons'
import { useWishlist } from '@/contexts'
import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

type ButtonWishlistProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  productId: string
}

export const ButtonWishlist = ({ productId, ...rest }: ButtonWishlistProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist, loading } =
    useWishlist()
  const currentItemIsInWishlist = isInWishlist(productId)
  const label = !currentItemIsInWishlist
    ? 'Adicionar à lista de desejos'
    : 'Remover da lista de desejos'

  function handleWishlist() {
    !currentItemIsInWishlist
      ? addToWishlist(productId)
      : removeFromWishlist(productId)
  }

  return (
    <Container
      aria-label={label}
      data-isinwishlist={currentItemIsInWishlist}
      data-is-loading={loading}
      {...rest}
      onClick={handleWishlist}
    >
      {!currentItemIsInWishlist ? <Heart /> : <HeartSolid />}
      {label}
    </Container>
  )
}

export default ButtonWishlist
