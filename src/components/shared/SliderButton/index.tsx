import { HTMLAttributes } from 'react'

import { ArrowSolid } from '@/components/icons'

import { Container } from './styles'

type SliderButtonProps = HTMLAttributes<HTMLButtonElement> & {
  direction?: 'left' | 'right'
}

export const SliderButton = ({
  direction = 'left',
  ...rest
}: SliderButtonProps) => {
  const ariaLabel = direction === 'left' ? 'Anterior' : 'Próximo'

  return (
    <Container data-direction={direction} aria-label={ariaLabel} {...rest}>
      <ArrowSolid />
    </Container>
  )
}

export default SliderButton
