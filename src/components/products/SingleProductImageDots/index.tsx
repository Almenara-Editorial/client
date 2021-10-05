import { Container } from './styles'

type SingleProductImageDotsProps = {
  dots: React.ReactNode
}

export const SingleProductImageDots = ({
  dots
}: SingleProductImageDotsProps) => <Container>{dots}</Container>

export default SingleProductImageDots
