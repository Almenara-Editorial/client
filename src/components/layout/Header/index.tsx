import { TextField } from '@/components/form'
import { Logo, HeaderActions } from '..'
import { Container, Wrapper } from './styles'

export const Header = () => (
  <Container>
    <Wrapper>
      <div>
        <Logo />
      </div>
      <TextField type="search" placeholder="O que você está procurando?" />
      <HeaderActions fullName="Maria José" />
    </Wrapper>
  </Container>
)

export default Header
