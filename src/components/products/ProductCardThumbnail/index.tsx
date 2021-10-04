import { Image, ImageProps } from '@/components/shared'
import { Container } from './styles'

type ProductCardThumbnailProps = Pick<ImageProps, 'aria-label'> & {
  src?: string | undefined
}

export function ProductCardThumbnail({
  src,
  'aria-label': ariaLabel
}: ProductCardThumbnailProps) {
  return (
    <Container>
      {src && (
        <Image
          src={src as string}
          width={149}
          height={213}
          objectFit="contain"
          aria-label={ariaLabel}
        />
      )}
    </Container>
  )
}
