import { Controller, useFormContext } from 'react-hook-form'
import { Select, SelectProps } from '../form'

type RHFSelectProps = Omit<SelectProps, 'onChange'> & {
  name: string
}

export function RHFSelect({ name, ...rest }: RHFSelectProps) {
  const { control } = useFormContext()

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
          onChange={onChange}
          value={value}
          error={error?.message}
          innerRef={ref}
          {...rest}
        />
      )}
    />
  )
}
