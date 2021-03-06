import { Minus, Plus } from '@/components/icons'
import { ChangeEvent, InputHTMLAttributes, useRef, useState } from 'react'
import { Container } from './styles'

type NumberFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  min?: number
  max?: number
  onChange?: (value: number) => void
}

export const NumberField = ({
  value: initialValue = 0,
  min,
  max,
  onChange
}: NumberFieldProps) => {
  const [value, setValue] = useState(Number(initialValue || min))
  const inputRef = useRef<HTMLInputElement>(null)

  function setNewValue(value: number) {
    const newValue =
      typeof max === 'number' && value >= max
        ? max
        : typeof min === 'number' && value <= min
        ? min
        : value

    onChange && onChange(newValue)

    setValue(newValue)
  }

  function handleAdd() {
    const newValue = typeof max === 'number' && value >= max ? max : value + 1

    setNewValue(newValue)
  }

  function handleSub() {
    const newValue = typeof min === 'number' && value <= min ? min : value - 1

    setNewValue(newValue)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewValue(Number(e.target.value))
  }

  return (
    <Container>
      <button onClick={handleSub} disabled={min === value}>
        <Minus />
      </button>
      <input
        type="number"
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />

      <button onClick={handleAdd} disabled={max === value}>
        <Plus />
      </button>
    </Container>
  )
}

export default NumberField
