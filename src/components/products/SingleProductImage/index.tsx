import { Image } from '@/components/shared'
import { Container } from './styles'

type SingleProductImageProps = {
  src: string | null | undefined
}

export function SingleProductImage({ src }: SingleProductImageProps) {
  return (
    <Container>
      {src && (
        <Image
          src={src}
          width={280}
          height={401}
          objectFit="contain"
          loading="eager"
        />
      )}
    </Container>
  )
}
