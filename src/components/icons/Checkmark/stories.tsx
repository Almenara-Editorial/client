import { Checkmark } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Checkmark',
  component: Checkmark
} as Meta

export const Basic: Story = (args) => <Checkmark {...args} />
