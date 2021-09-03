import { Image } from '@/components/shared'
import { Container } from './styles'

export type HeroSliderImageModel = {
  src: string
  url?: string | null
}

type HeroSliderImageProps = {
  image: HeroSliderImageModel
}

export const HeroSliderImage = ({ image }: HeroSliderImageProps) => (
  <Container>
    <Image src={image.src} width={1920} height={600} loading="eager" />
  </Container>
)

export default HeroSliderImage
