import { Close } from '@/components/icons'
import { Image } from '@/components/shared'
import { SliderButton } from '@/components/shared'
import { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import Slider, { Settings } from 'react-slick'
import { SingleProductImageDots, SingleProductImagePaging } from '..'
import { Container, Popup, PopupImage } from './styles'

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
  const [isClient, setIsClient] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  function escFunction(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      setIsPopupOpen(false)
    }
  }

  useEffect(() => {
    setIsClient(true)
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [])

  useEffect(() => {
    if (isPopupOpen) document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isPopupOpen])

  return (
    <>
      <Container onClick={() => setIsPopupOpen(true)}>
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
      {isClient &&
        isPopupOpen &&
        ReactDom.createPortal(
          <Popup>
            <button
              className="close-button"
              onClick={() => setIsPopupOpen(false)}
            >
              <Close />
            </button>
            <Slider
              {...settings}
              arrows={true}
              prevArrow={<SliderButton />}
              nextArrow={<SliderButton direction="right" />}
            >
              {images &&
                images.map((image) => (
                  <PopupImage key={image}>
                    {image && (
                      <Image
                        src={image}
                        objectFit="contain"
                        width={840}
                        height={1203}
                        loading="eager"
                      />
                    )}
                  </PopupImage>
                ))}
            </Slider>
          </Popup>,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          document.querySelector('#slider-portal')!
        )}
    </>
  )
}
