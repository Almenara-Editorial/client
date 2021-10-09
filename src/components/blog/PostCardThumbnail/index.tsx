import { Image } from '@/components/shared'
import { Container } from './styles'

type PostCardThumbnailProps = {
  src: string
}

export const PostCardThumbnail = ({ src }: PostCardThumbnailProps) => (
  <Container>
    {src && <Image src={src} layout="fill" objectFit="cover" />}
  </Container>
)
