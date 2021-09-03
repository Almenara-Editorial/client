import { TextField } from '@/components/form'
import { Link } from '@/components/shared'
import { HeaderActions } from '../HeaderActions'
import { Logo } from '../Logo'
import { Container, Wrapper } from './styles'

export const Header = () => (
  <Container>
    <Wrapper>
      <div>
        <Link href="/" as="a">
          <Logo />
        </Link>
      </div>
      <TextField type="search" placeholder="O que você está procurando?" />
      <HeaderActions fullName="Maria José" />
    </Wrapper>
  </Container>
)

export default Header
