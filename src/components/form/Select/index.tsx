import { SelectHTMLAttributes, useEffect, useState, Fragment } from 'react'
import { Container, Button, Popover, Option } from './styles'
import { Listbox } from '@headlessui/react'
import { CaretDownSolid, Checkmark } from '@/components/icons'

type Option = {
  text: string
  value: string | number
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[]
  onChange?: (value: Option['value']) => void
  value?: Option['value']
}

export const Select = ({ options, onChange, value }: SelectProps) => {
  const emptyOption: Option = { text: '', value: '' }
  const [selectedOption, setSelectedOption] = useState(options ? options[0] : emptyOption)

  useEffect(() => {
    onChange && selectedOption && onChange(selectedOption.value), [selectedOption]
  }, [onChange, selectedOption])

  useEffect(() => {
    if (!value) return

    const selected = options.find((option) => option.value === value)
    selected && setSelectedOption(selected)
  }, [options, value])

  return (
    <Listbox as={Container} value={selectedOption} onChange={setSelectedOption}>
      <Listbox.Button as={Button}>
        {selectedOption.text}
        <i>
          <CaretDownSolid />
        </i>
      </Listbox.Button>
      <Listbox.Options as={Popover}>
        {options?.map((option) => (
          <Listbox.Option as={Fragment} key={option.value} value={option}>
            {({ active, selected }) => (
              <Option data-active={active} data-selected={selected}>
                {selected && <Checkmark />}
                {option.text}
              </Option>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default Select
