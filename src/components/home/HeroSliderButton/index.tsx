import { HTMLAttributes } from 'react'

import { ArrowSolid } from '@/components/icons'

import { Container } from './styles'

type HeroSliderButtonProps = HTMLAttributes<HTMLButtonElement> & {
  direction?: 'left' | 'right'
}

export const HeroSliderButton = ({
  direction = 'left',
  ...rest
}: HeroSliderButtonProps) => {
  const ariaLabel = direction === 'left' ? 'Anterior' : 'Próximo'

  return (
    <Container data-direction={direction} aria-label={ariaLabel} {...rest}>
      <ArrowSolid />
    </Container>
  )
}

export default HeroSliderButton
