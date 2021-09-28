import { ForwardRefRenderFunction, useState } from 'react'
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react'
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
  value: string | number
  content?: React.ReactNode
}

export type RadioGroupProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  label?: string
  error?: string
  radios: RadioModel[]
  onChange: (value: RadioModel['value']) => void
}

const RadioGroupFn: ForwardRefRenderFunction<HTMLDivElement, RadioGroupProps> =
  ({ label, radios, error, onChange }, ref) => {
    const [radioValue, setRadioValue] = useState(radios[0].value)

    useEffect(() => {
      onChange && onChange(radioValue)
    }, [onChange, radioValue])

    return (
      <HeadlessRadioGroup value={radioValue} onChange={setRadioValue}>
        <HeadlessRadioGroup.Label>
          {label && <Label>{label}</Label>}
        </HeadlessRadioGroup.Label>
        <Radios ref={ref}>
          {radios?.map((radio) => (
            <RadioWrapper
              key={radio.value}
              data-checked={radioValue === radio.value}
            >
              <HeadlessRadioGroup.Option value={radio.value}>
                {({ checked }) => (
                  <Radio
                    data-checked={checked}
                    data-radio-center={!radio.title}
                  >
                    <span />
                    {typeof radio.title === 'string' && (
                      <RadioTitle>{radio.title}</RadioTitle>
                    )}
                    {typeof radio.title === 'object' && radio.title}
                  </Radio>
                )}
              </HeadlessRadioGroup.Option>
              <ContentWrapper>{radio.content}</ContentWrapper>
            </RadioWrapper>
          ))}
        </Radios>
        {error && <ErrorMessage error={error} />}
      </HeadlessRadioGroup>
    )
  }

export const RadioGroup = forwardRef(RadioGroupFn)
