import { HTMLAttributes } from 'react'
import { Container } from './styles'

type SigninButtonProps = HTMLAttributes<HTMLButtonElement>

export const SigninButton = (props: SigninButtonProps) => {
  return <Container {...props}>Entre ou cadastre-se</Container>
}
