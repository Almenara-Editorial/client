import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState
} from 'react'

import { Label } from '@/components/form'

import { Container, Input } from './styles'
import { Eye, EyeInvisible, Search } from '@/components/icons'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  type?: 'text' | 'password' | 'search'
}

const TextFieldFn: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> =
  ({ label, type = 'text', placeholder, ...rest }, ref) => {
    const [fieldType, setFieldType] = useState<TextFieldProps['type']>(type)
    const isShowingPassword = fieldType === 'text'

    function togglePasswordVisibility() {
      setFieldType((state) => (state === 'password' ? 'text' : 'password'))
    }

    return (
      <Container>
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
      </Container>
    )
  }

export const TextField = forwardRef(TextFieldFn)
