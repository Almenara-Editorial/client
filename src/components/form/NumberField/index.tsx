import { Minus, Plus } from '@/components/icons'
import { InputHTMLAttributes, useEffect, useState } from 'react'
import { Container } from './styles'

type NumberFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  min?: number
  max?: number
  onChange?: (value: number) => void
}

export const NumberField = ({ value: initialValue = 0, min, max, onChange }: NumberFieldProps) => {
  const [value, setValue] = useState(Number(initialValue))

  function handleAdd() {
    if (typeof max === 'number' && value === max) return

    setValue((value) => value + 1)
  }

  function handleSub() {
    if (typeof min === 'number' && value === min) return

    setValue((value) => value - 1)
  }

  useEffect(() => {
    onChange && onChange(value)
  }, [value, onChange])

  return (
    <Container>
      <button onClick={handleSub}>
        <Minus />
      </button>
      <span>{value}</span>
      <button onClick={handleAdd}>
        <Plus />
      </button>
    </Container>
  )
}

export default NumberField
