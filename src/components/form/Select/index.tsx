import {
  SelectHTMLAttributes,
  useEffect,
  useState,
  Fragment,
  Ref,
  useMemo
} from 'react'
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
  error
}: SelectProps) => {
  const emptyOption: Option = useMemo(() => ({ text: '', value: '' }), [])
  const [selectedOption, setSelectedOption] = useState(
    options && options.length > 0 ? options[0] : emptyOption
  )

  useEffect(() => {
    onChange && selectedOption && onChange(selectedOption.value),
      [selectedOption]
  }, [onChange, selectedOption])

  useEffect(() => {
    if (!options || options.length === 0) return setSelectedOption(emptyOption)

    if (!value) return setSelectedOption(options[0])

    const selected = options.find((option) => option.value === value)
    selected ? setSelectedOption(selected) : setSelectedOption(options[0])
  }, [options, value, emptyOption])

  return (
    <Listbox
      as={Container}
      value={selectedOption}
      onChange={setSelectedOption}
      disabled={disabled}
    >
      {label && <Label>{label}</Label>}
      <Listbox.Button as={Button} data-disabled={disabled} ref={innerRef}>
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
      {error && <ErrorMessage error={error} />}
    </Listbox>
  )
}

export default Select
