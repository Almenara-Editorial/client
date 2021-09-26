import { useState } from 'react'
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react'
import { Radios, Radio } from './styles'
import { Label } from '../Label'

type RadioModel = {
  value: string | number
  text: string
}

type RadioGroupProps = {
  label?: string
  radios: RadioModel[]
}

export function RadioGroup({ label, radios }: RadioGroupProps) {
  const [plan, setPlan] = useState('startup')

  return (
    <HeadlessRadioGroup value={plan} onChange={setPlan}>
      <HeadlessRadioGroup.Label>
        {label && <Label>{label}</Label>}
      </HeadlessRadioGroup.Label>
      <Radios>
        {radios?.map((radio) => (
          <HeadlessRadioGroup.Option key={radio.value} value={radio.value}>
            {({ checked }) => (
              <Radio data-checked={checked}>
                <span /> {radio.text}
              </Radio>
            )}
          </HeadlessRadioGroup.Option>
        ))}
      </Radios>
    </HeadlessRadioGroup>
  )
}
