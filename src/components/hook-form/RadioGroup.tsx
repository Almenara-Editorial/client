import { Controller, useFormContext } from 'react-hook-form'
import { RadioGroup, RadioGroupProps } from '../form'

type RHFRadioGroupProps = RadioGroupProps & {
  name: string
}

export function RHFRadioGroup({ name, onChange, ...rest }: RHFRadioGroupProps) {
  const { control } = useFormContext()

  function handleChange(value: string, RHFonChange: (value: string) => void) {
    onChange && onChange(value)

    RHFonChange(value)
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error }
      }) => (
        <RadioGroup
          onBlur={onBlur}
          onChange={(value) => handleChange(value, onChange)}
          checked={value}
          error={error?.message}
          ref={ref}
          {...rest}
        />
      )}
    />
  )
}
