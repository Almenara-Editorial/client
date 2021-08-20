import { Minus, Plus } from '@/components/icons'
import { useOnClickOutside } from '@/hooks'
import { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { Container } from './styles'

type NumberFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  min?: number
  max?: number
  onChange?: (value: number) => void
}

export const NumberField = ({ value: initialValue = 0, min, max, onChange }: NumberFieldProps) => {
  const [value, setValue] = useState(Number(initialValue))
  const [isInput, setIsInput] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  useOnClickOutside<HTMLInputElement>(inputRef, () => setIsInput(false))

  function setNewValue(value: number) {
    if ((typeof max === 'number' && value > max) || (typeof min === 'number' && value < min)) return

    setValue(value)
  }

  function handleAdd() {
    if (typeof max === 'number' && value === max) return

    setNewValue(value + 1)
  }

  function handleSub() {
    if (typeof min === 'number' && value === min) return

    setNewValue(value - 1)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewValue(Number(e.target.value))
  }

  function handleChangeToInput() {
    setIsInput(true)
  }

  useEffect(() => {
    onChange && onChange(value)
  }, [value, onChange])

  return (
    <Container>
      <button onClick={handleSub} disabled={min === value}>
        <Minus />
      </button>
      {isInput ? (
        <input type="number" ref={inputRef} value={value} onChange={handleChange} />
      ) : (
        <span onClick={handleChangeToInput}>{value}</span>
      )}
      <button onClick={handleAdd} disabled={max === value}>
        <Plus />
      </button>
    </Container>
  )
}

export default NumberField
