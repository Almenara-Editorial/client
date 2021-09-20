import { CartDropdown } from '@/components/cart'
import { FavoritesLink, HeaderAccount } from '..'
import { Container } from './styles'

export const HeaderActions = () => (
  <Container>
    <FavoritesLink />
    <CartDropdown />
    <HeaderAccount />
  </Container>
)
