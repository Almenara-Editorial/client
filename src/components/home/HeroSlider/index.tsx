import Slider, { Settings } from 'react-slick'

import { HeroSliderImageModel, HeroSliderImage, HeroSliderDots, HeroSliderPaging } from '@/components/home'

import { Container } from './styles'
import HeroSliderButton from '../HeroSliderButton'

export type HeroSliderProps = {
  images: HeroSliderImageModel[]
}

const sliderSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  prevArrow: <HeroSliderButton />,
  nextArrow: <HeroSliderButton direction="right" />,
  // eslint-disable-next-line react/display-name
  appendDots: (dots) => <HeroSliderDots dots={dots} />,
  // eslint-disable-next-line react/display-name
  customPaging: () => <HeroSliderPaging />
}

export const HeroSlider = ({ images }: HeroSliderProps) => {
  if (!images) return null

  return (
    <Container>
      <Slider {...sliderSettings}>
        {images.map((image) => (
          <HeroSliderImage key={image.url} image={image} />
        ))}
      </Slider>
    </Container>
  )
}

export default HeroSlider
