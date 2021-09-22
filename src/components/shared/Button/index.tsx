import { Loading } from '@/components/animations'
import { Checkmark } from '@/components/icons'
import { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from 'react'
import { Container } from './styles'

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
  type?: 'button' | 'submit'
  size?: ButtonSize
  uppercase?: boolean
  outline?: boolean
  color?: ButtonColor
  isLoading?: boolean
  isSuccess?: boolean
  disabled?: boolean
  as?: React.ElementType | string
}

export const ButtonFn: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({ isLoading, isSuccess, children, ...rest }, ref) => {
  return (
    <Container
      {...rest}
      ref={ref}
      isLoading={isLoading}
      isSuccess={isSuccess}
      aria-busy={isLoading}
    >
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

export const Button = forwardRef(ButtonFn)
