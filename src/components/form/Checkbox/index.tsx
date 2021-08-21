import { Checkmark } from '@/components/icons'
import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  checked: boolean
  onChange?: (value: boolean) => void
}

export const Checkbox = ({ checked, children, onChange, ...rest }: CheckboxProps) => {
  function handleChange() {
    onChange && onChange(!checked)
  }

  return (
    <Container>
      <input type="checkbox" className="sr-only" onChange={handleChange} checked={checked} {...rest} />
      <span>{checked && <Checkmark />}</span>
      {children}
    </Container>
  )
}

export default Checkbox
