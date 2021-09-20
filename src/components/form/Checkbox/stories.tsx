import { Checkbox } from '.'
import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'form/Checkbox',
  component: Checkbox
} as Meta

export const Basic: Story = () => {
  const [checked, setIsChecked] = useState(false)

  return (
    <Checkbox value={true} checked={checked} onChange={setIsChecked}>
      Manter-me conectado
    </Checkbox>
  )
}
