import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Container } from './styles'

type SingleProductDetailsTabProps = {
  active?: boolean
  title: string
}

const SingleProductDetailsTabFn: ForwardRefRenderFunction<HTMLButtonElement, SingleProductDetailsTabProps> = (
  { active, title, ...rest },
  ref
) => (
  <Container data-active={active} {...rest} ref={ref}>
    {title}
  </Container>
)

export const SingleProductDetailsTab = forwardRef(SingleProductDetailsTabFn)
