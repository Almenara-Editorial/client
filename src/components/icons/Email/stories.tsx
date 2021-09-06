import { Email } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Email',
  component: Email
} as Meta

export const Basic: Story = (args) => <Email {...args} />
