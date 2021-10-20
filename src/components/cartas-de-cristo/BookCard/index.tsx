import { Image } from '@/components/shared'
import { Container, Cover, Description } from './styles'

type BookCardProps = {
  image: string
  description: string
}

export const BookCard = ({ image, description }: BookCardProps) => (
  <Container>
    <Cover>
      {image && <Image src={image} layout="fill" objectFit="contain" />}
    </Cover>
    <Description dangerouslySetInnerHTML={{ __html: description }} />
  </Container>
)
