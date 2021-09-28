import { Image } from '@/components/shared'
import { Container } from './styles'

type SingleProductImageProps = {
  src: string
}

export function SingleProductImage({ src }: SingleProductImageProps) {
  return (
    <Container>
      <Image
        src={src}
        width={280}
        height={401}
        objectFit="contain"
        loading="eager"
      />
    </Container>
  )
}
