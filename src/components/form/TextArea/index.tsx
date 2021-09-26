import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'

import { Label } from '@/components/form'

import { Container, Input } from './styles'
import { ErrorMessage } from '../ErrorMessage'
import { FieldContainer } from '../TextField/styles'

export type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  error?: string
}

const TextAreaFn: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> =
  ({ label, placeholder, error, ...rest }, ref) => {
    return (
      <Container>
        {label && <Label>{label}</Label>}
        <FieldContainer>
          <Input
            ref={ref}
            {...rest}
            placeholder={placeholder}
            data-hidden-placeholder={!!label}
          />
        </FieldContainer>
        {error && <ErrorMessage error={error} />}
      </Container>
    )
  }

export const TextArea = forwardRef(TextAreaFn)
