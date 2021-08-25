import { Checkmark } from '@/components/icons'
import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
  value: boolean
  onChange?: (value: boolean) => void
}

export const Checkbox = ({ value, children, onChange, ...rest }: CheckboxProps) => {
  function handleChange() {
    onChange && onChange(!value)
  }

  return (
    <Container>
      <input type="checkbox" className="sr-only" onChange={handleChange} checked={value} {...rest} />
      <span>{value && <Checkmark />}</span>
      {children}
    </Container>
  )
}

export default Checkbox
