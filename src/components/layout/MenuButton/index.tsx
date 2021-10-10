import { HTMLAttributes } from 'react'
import { Container } from './styles'

type MenuButtonProps = HTMLAttributes<HTMLButtonElement>

export function MenuButton(props: MenuButtonProps) {
  return <Container {...props}></Container>
}
