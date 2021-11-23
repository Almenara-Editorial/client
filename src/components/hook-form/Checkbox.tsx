import { Controller, useFormContext } from 'react-hook-form'
import { Checkbox, CheckboxProps } from '../form'

type RHFCheckboxProps = Omit<CheckboxProps, 'value'> & {
  name: string
}

export function RHFCheckbox({ name, ...rest }: RHFCheckboxProps) {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value = false } }) => (
        <Checkbox
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          checked={value}
          {...rest}
        />
      )}
    />
  )
}
