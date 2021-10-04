import { Logo } from '@/components/layout'
import { Link } from '@/components/shared'
import { Container } from './styles'

export const Header = () => (
  <Container>
    <Link href="/" as="a">
      <Logo />
    </Link>
  </Container>
)
