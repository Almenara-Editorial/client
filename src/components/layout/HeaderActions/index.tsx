import { FavoritesLink, HeaderAccount, HeaderAccountProps, CartButton } from '..'
import { Container } from './styles'

type HeaderActionsProps = HeaderAccountProps

export const HeaderActions = ({ fullName }: HeaderActionsProps) => (
  <Container>
    <FavoritesLink />
    <HeaderAccount fullName={fullName} />
    <CartButton />
  </Container>
)
