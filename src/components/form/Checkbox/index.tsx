import { Checkmark } from '@/components/icons'
import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  value: boolean
  label?: string
  onChange?: (value: boolean) => void
}

export const Checkbox = ({
  value,
  label,
  onChange,
  ...rest
}: CheckboxProps) => {
  function handleChange() {
    onChange && onChange(!value)
  }

  return (
    <Container>
      <input
        type="checkbox"
        className="sr-only"
        onChange={handleChange}
        checked={value}
        {...rest}
      />
      <span>{value && <Checkmark />}</span>
      {label}
    </Container>
  )
}

export default Checkbox
