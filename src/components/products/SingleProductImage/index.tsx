import { Image } from '@/components/shared'
import Slider, { Settings } from 'react-slick'
import { SingleProductImageDots, SingleProductImagePaging } from '..'
import { Container } from './styles'

type SingleProductImageProps = {
  images: (string | null | undefined)[]
}

const settings: Settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // eslint-disable-next-line react/display-name
  appendDots: (dots) => <SingleProductImageDots dots={dots} />,
  // eslint-disable-next-line react/display-name
  customPaging: () => <SingleProductImagePaging />
}

export function SingleProductImage({ images }: SingleProductImageProps) {
  return (
    <Container>
      <Slider {...settings}>
        {images &&
          images.map((image) => (
            <div key={image}>
              {image && (
                <Image
                  src={image}
                  width={280}
                  height={401}
                  objectFit="contain"
                  loading="eager"
                />
              )}
            </div>
          ))}
      </Slider>
    </Container>
  )
}
