import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState
} from 'react'

import { Label } from '@/components/form'

import { Container, FieldContainer, Input } from './styles'
import { Eye, EyeInvisible, Search } from '@/components/icons'
import { ErrorMessage } from '../ErrorMessage'

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  type?: 'text' | 'password' | 'search'
  error?: string
}

const TextFieldFn: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> =
  ({ label, type = 'text', placeholder, error, ...rest }, ref) => {
    const [fieldType, setFieldType] = useState<TextFieldProps['type']>(type)
    const isShowingPassword = fieldType === 'text'

    function togglePasswordVisibility() {
      setFieldType((state) => (state === 'password' ? 'text' : 'password'))
    }

    return (
      <Container>
        <FieldContainer>
          <Input
            type={fieldType}
            ref={ref}
            {...rest}
            placeholder={placeholder || label}
            data-hidden-placeholder={!!label}
          />
          {label && type !== 'search' && <Label>{label}</Label>}
          {type === 'password' && (
            <button type="button" onClick={togglePasswordVisibility}>
              {isShowingPassword ? <EyeInvisible /> : <Eye />}
            </button>
          )}
          {type === 'search' && (
            <button>
              <Search />
            </button>
          )}
        </FieldContainer>
        {error && <ErrorMessage error={error} />}
      </Container>
    )
  }

export const TextField = forwardRef(TextFieldFn)
