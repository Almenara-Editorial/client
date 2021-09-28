import { Container } from './styles'

type HeroSliderDotsProps = {
  dots: React.ReactNode
}

export const HeroSliderDots = ({ dots }: HeroSliderDotsProps) => (
  <Container>{dots}</Container>
)

export default HeroSliderDots
