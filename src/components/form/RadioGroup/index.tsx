import { ForwardRefRenderFunction, useState } from 'react'
import {
  Radios,
  Radio,
  RadioTitle,
  RadioWrapper,
  ContentWrapper
} from './styles'
import { Label } from '../Label'
import { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { useEffect } from 'react'
import { ErrorMessage } from '../ErrorMessage'

type RadioModel = {
  title?: React.ReactNode
  value: string
  content?: React.ReactNode
}

export type RadioGroupProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  label?: string
  error?: string
  defaultValue?: string
  radios: RadioModel[]
  onChange: (value: RadioModel['value']) => void
}

const RadioGroupFn: ForwardRefRenderFunction<HTMLDivElement, RadioGroupProps> =
  (
    { label, radios, defaultValue = radios[0]?.value, error, onChange },
    ref
  ) => {
    const [radioValue, setRadioValue] = useState(
      defaultValue || radios[0]?.value
    )

    useEffect(() => {
      onChange && onChange(radioValue)
    }, [onChange, radioValue])

    return (
      <div>
        {label && <Label>{label}</Label>}
        <Radios ref={ref}>
          {radios?.map((radio) => (
            <RadioWrapper
              key={radio.value}
              data-checked={radioValue === radio.value}
              onClick={() => setRadioValue(radio.value)}
            >
              <Radio
                data-checked={radioValue === radio.value}
                data-radio-center={!radio.title}
              >
                <span />
                {typeof radio.title === 'string' && (
                  <RadioTitle>{radio.title}</RadioTitle>
                )}
                {typeof radio.title === 'object' && radio.title}
              </Radio>

              <ContentWrapper>{radio.content}</ContentWrapper>
            </RadioWrapper>
          ))}
        </Radios>
        {error && <ErrorMessage error={error} />}
      </div>
    )
  }

export const RadioGroup = forwardRef(RadioGroupFn)
