import React, { InputHTMLAttributes, useState } from 'react'

import { Label } from '@/components/form'

import { Container, Input } from './styles'
import { Eye, EyeInvisible, Search } from '@/components/icons'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  type?: 'text' | 'password' | 'search'
}

export const TextField = ({ label, type = 'text', ...rest }: TextFieldProps) => {
  const [fieldType, setFieldType] = useState<TextFieldProps['type']>(type)
  const isShowingPassword = fieldType === 'text'

  function togglePasswordVisibility() {
    setFieldType((state) => (state === 'password' ? 'text' : 'password'))
  }

  return (
    <Container>
      <Input type={fieldType} {...rest} placeholder={label} />
      {label && type !== 'search' && <Label>{label}</Label>}
      {type === 'password' && <button onClick={togglePasswordVisibility}>{isShowingPassword ? <EyeInvisible /> : <Eye />}</button>}
      {type === 'search' && (
        <button>
          <Search />
        </button>
      )}
    </Container>
  )
}

export default TextField
