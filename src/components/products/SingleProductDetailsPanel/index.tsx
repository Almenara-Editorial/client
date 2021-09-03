import { Container } from './styles'

type SingleProductDetailsPanelProps = {
  content: string
}

export const SingleProductDetailsPanel = ({ content }: SingleProductDetailsPanelProps) => {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />
}
