import { Pin } from '@/components/icons'
import { Anchor } from '@/components/shared'
import { Container } from './styles'

export const SelectAddressButton = () => {
  return (
    <Container>
      <Anchor as="button" size="sm">
        <i>
          <Pin />
        </i>
        Selecione o endereço
      </Anchor>
    </Container>
  )
}

export default SelectAddressButton
