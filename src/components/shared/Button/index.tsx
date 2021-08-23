import { Loading } from '@/components/animations'
import { HTMLAttributes } from 'react'
import { Container } from './styles'

type ButtonVariant = 'primary' | 'neutral'
type ButtonColor = 'primary' | 'neutral' | 'background'
type ButtonSize = 'rg-narrow' | 'rg-medium' | 'rg-wide' | 'rg-full' | 'sm-narrow' | 'sm-medium' | 'sm-wide' | 'sm-full'

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize
  uppercase?: boolean
  outline?: boolean
  color?: ButtonColor
  variant?: ButtonVariant
  isLoading?: boolean
  disabled?: boolean
  as?: React.ElementType | string
}

export function Button({ isLoading, children, ...rest }: ButtonProps) {
  return (
    <Container {...rest} isLoading={isLoading} aria-busy={isLoading}>
      {children}
      {isLoading && (
        <i>
          <Loading aria-label="Carregando" />
        </i>
      )}
    </Container>
  )
}
