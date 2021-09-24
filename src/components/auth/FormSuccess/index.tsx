import { Checkmark } from '@/components/icons'
import { Container } from './styles'

export function FormSuccess() {
  return (
    <Container>
      <i>
        <Checkmark />
      </i>
      E-mail enviado com sucesso.
    </Container>
  )
}
