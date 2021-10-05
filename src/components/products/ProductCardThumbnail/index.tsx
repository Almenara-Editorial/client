import { Image, ImageProps } from '@/components/shared'
import { Container } from './styles'

type ProductCardThumbnailProps = Pick<ImageProps, 'aria-label'> & {
  src?: string | undefined
  muted?: boolean
}

export function ProductCardThumbnail({
  src,
  muted,
  'aria-label': ariaLabel
}: ProductCardThumbnailProps) {
  return (
    <Container data-muted={muted}>
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
