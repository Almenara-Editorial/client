import { SelectHTMLAttributes, useEffect, useState, Fragment, Ref } from 'react'
import { Container, Button, Popover, Option } from './styles'
import { Listbox } from '@headlessui/react'
import { CaretDownSolid, Checkmark } from '@/components/icons'
import { ErrorMessage } from '../ErrorMessage'
import { Label } from '../Label'

type Option = {
  text: string
  value: string | number
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[]
  onChange?: (value: Option['value']) => void
  value?: Option['value']
  disabledPlaceholder?: string
  error?: string
  label?: string
  innerRef?: Ref<HTMLButtonElement>
}

export const Select = ({
  options,
  onChange,
  value,
  innerRef,
  label,
  disabled,
  disabledPlaceholder,
  error
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<Option>()

  function handleChange(selected: Option) {
    selected && setSelectedOption(selected)
    onChange && selected && onChange(selected.value)
  }

  useEffect(() => {
    // if (!options || options.length === 0) return setSelectedOption(emptyOption)

    const selected = options.find(
      (option) => option.value.toString() === value?.toString()
    )
    selected && setSelectedOption(selected)
  }, [options, value])

  return (
    <Listbox
      as={Container}
      value={selectedOption}
      onChange={handleChange}
      disabled={disabled}
    >
      {label && <Label>{label}</Label>}
      <Listbox.Button as={Button} data-disabled={disabled} ref={innerRef}>
        {!disabled
          ? selectedOption?.text || 'Selecione uma opção'
          : disabledPlaceholder || ''}
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
      {error && <ErrorMessage error={error} />}
    </Listbox>
  )
}

export default Select
