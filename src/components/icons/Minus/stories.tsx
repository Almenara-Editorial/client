import { Minus } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Minus',
  component: Minus
} as Meta

export const Basic: Story = (args) => <Minus {...args} />
