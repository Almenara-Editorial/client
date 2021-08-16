import { Close } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Close',
  component: Close
} as Meta

export const Basic: Story = (args) => <Close {...args} />
