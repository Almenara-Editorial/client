import { Loading } from '@/components/animations'
import { Container } from './styles'

type LoaderProps = {
  message?: string
}

export const Loader = ({ message }: LoaderProps) => (
  <Container role="alert" aria-busy="true">
    {message && message}
    <i>
      <Loading />
    </i>
  </Container>
)
