import { Facebook } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Facebook',
  component: Facebook
} as Meta

export const Basic: Story = (args) => <Facebook {...args} />
