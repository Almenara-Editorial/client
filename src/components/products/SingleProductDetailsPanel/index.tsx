import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Container } from './styles'

type SingleProductDetailsPanelProps = {
  content: string
}

const SingleProductDetailsPanelFn: ForwardRefRenderFunction<
  HTMLDivElement,
  SingleProductDetailsPanelProps
> = ({ content }, ref) => {
  return <Container ref={ref} dangerouslySetInnerHTML={{ __html: content }} />
}

export const SingleProductDetailsPanel = forwardRef(SingleProductDetailsPanelFn)
