import { CartDropdown } from '@/components/cart'
import { FavoritesLink, HeaderAccount, HeaderAccountProps } from '..'
import { Container } from './styles'

type HeaderActionsProps = HeaderAccountProps

export const HeaderActions = ({ fullName }: HeaderActionsProps) => (
  <Container>
    <FavoritesLink />
    <HeaderAccount fullName={fullName} />
    <CartDropdown />
  </Container>
)
