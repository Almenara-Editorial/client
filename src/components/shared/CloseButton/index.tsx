import { Close } from '@/components/icons'
import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const CloseButton = (props: CloseButtonProps) => (
  <Container {...props}>
    <Close />
  </Container>
)
