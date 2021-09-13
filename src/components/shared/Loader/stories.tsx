import { Loader } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Loader',
  component: Loader
} as Meta

export const Basic: Story = (args) => <Loader {...args} />
