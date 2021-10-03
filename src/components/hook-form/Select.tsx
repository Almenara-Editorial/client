import { Controller, useFormContext } from 'react-hook-form'
import { Select, SelectProps } from '../form'

type RHFSelectProps = Omit<SelectProps, 'onChange'> & {
  name: string
  onChange?: (value: unknown) => void
}

export function RHFSelect({ name, onChange, ...rest }: RHFSelectProps) {
  const { control } = useFormContext()

  function handleChange(
    value: unknown,
    hookFormOnChange: (value: unknown) => void
  ) {
    hookFormOnChange(value)
    onChange && onChange(value)
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error }
      }) => (
        <Select
          onBlur={onBlur}
          onChange={(value) => handleChange(value, onChange)}
          value={value}
          error={error?.message}
          innerRef={ref}
          {...rest}
        />
      )}
    />
  )
}
