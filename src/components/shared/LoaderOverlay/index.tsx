import { Loader } from '../Loader'
import { Container } from './styles'

export function LoaderOverlay() {
  return (
    <Container>
      <Loader message="Carregando" />
    </Container>
  )
}
