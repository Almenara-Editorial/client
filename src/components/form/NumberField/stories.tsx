import { NumberField } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'form/NumberField',
  component: NumberField
} as Meta

export const Basic: Story = (args) => <NumberField min={0} max={10} {...args} />
