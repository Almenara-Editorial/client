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
import { mask as inputMask } from '@/utils'

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  type?: 'text' | 'password' | 'search'
  error?: string
  isLoading?: boolean
  labelStyle?: 'dynamic' | 'static'
  mask?: string | string[]
}

const TextFieldFn: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> =
  (
    {
      label,
      type = 'text',
      placeholder,
      onChange,
      mask,
      error,
      isLoading,
      labelStyle = 'dynamic',
      ...rest
    },
    ref
  ) => {
    const [fieldType, setFieldType] = useState<TextFieldProps['type']>(type)
    const isShowingPassword = fieldType === 'text'

    function togglePasswordVisibility() {
      setFieldType((state) => (state === 'password' ? 'text' : 'password'))
    }

    return (
      <Container>
        <FieldContainer>
          {label && labelStyle === 'static' && type !== 'search' && (
            <Label>{label}</Label>
          )}
          <Input
            {...rest}
            type={fieldType}
            ref={ref}
            onChange={(e) => {
              const value = mask
                ? inputMask(e.target.value, mask)
                : e.target.value

              e.target.value = value

              onChange && onChange(e)
            }}
            placeholder={placeholder || label}
            data-hidden-placeholder={!!label}
            data-loading={isLoading}
          />
          {label && labelStyle === 'dynamic' && type !== 'search' && (
            <Label>{label}</Label>
          )}
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
