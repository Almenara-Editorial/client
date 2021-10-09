import { Container } from './styles'
import { Image } from '@/components/shared'

type PostCoverProps = {
  src: string
}

export function PostCover({ src }: PostCoverProps) {
  return (
    <Container>
      {src && <Image src={src} layout="fill" objectFit="cover" />}{' '}
    </Container>
  )
}
