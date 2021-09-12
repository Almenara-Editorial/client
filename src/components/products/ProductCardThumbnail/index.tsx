import { Image, ImageProps } from '@/components/shared'
import { Container } from './styles'

type ProductCardThumbnailProps = Pick<ImageProps, 'src' | 'aria-label'>

export function ProductCardThumbnail({
  src,
  'aria-label': ariaLabel
}: ProductCardThumbnailProps) {
  return (
    <Container>
      <Image
        src={src as string}
        width={149}
        height={213}
        objectFit="contain"
        aria-label={ariaLabel}
      />
    </Container>
  )
}
