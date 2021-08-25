import { Loading } from '@/components/animations'
import { Checkmark } from '@/components/icons'
import { HTMLAttributes } from 'react'
import { Container } from './styles'

type ButtonVariant = 'primary' | 'neutral'
type ButtonColor = 'primary' | 'neutral' | 'background' | 'white'
type ButtonSize =
  | 'rg-smallest'
  | 'rg-narrow'
  | 'rg-medium'
  | 'rg-wide'
  | 'rg-full'
  | 'sm--smallest'
  | 'sm-narrow'
  | 'sm-medium'
  | 'sm-wide'
  | 'sm-full'

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize
  uppercase?: boolean
  outline?: boolean
  color?: ButtonColor
  variant?: ButtonVariant
  isLoading?: boolean
  isSuccess?: boolean
  disabled?: boolean
  as?: React.ElementType | string
}

export function Button({ isLoading, isSuccess, children, ...rest }: ButtonProps) {
  return (
    <Container {...rest} isLoading={isLoading} isSuccess={isSuccess} aria-busy={isLoading}>
      {children}
      {isLoading && (
        <i>
          <Loading aria-label="Carregando" />
        </i>
      )}
      {!isLoading && isSuccess && (
        <i>
          <Checkmark />
        </i>
      )}
    </Container>
  )
}
