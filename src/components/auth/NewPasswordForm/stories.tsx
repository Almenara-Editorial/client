import { NewPasswordForm } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'NewPasswordForm',
  component: NewPasswordForm
} as Meta

export const Basic: Story = (args) => <NewPasswordForm {...args} />
