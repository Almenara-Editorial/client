import { Controller, useFormContext } from 'react-hook-form'
import { RadioGroup, RadioGroupProps } from '../form'

type RHFRadioGroupProps = Omit<RadioGroupProps, 'onChange'> & {
  name: string
}

export function RHFRadioGroup({ name, ...rest }: RHFRadioGroupProps) {
  const { control } = useFormContext()

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
          onChange={onChange}
          checked={value}
          error={error?.message}
          ref={ref}
          {...rest}
        />
      )}
    />
  )
}
