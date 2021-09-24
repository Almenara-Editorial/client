import { ForgotPasswordForm } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'ForgotPasswordForm',
  component: ForgotPasswordForm
} as Meta

export const Basic: Story = (args) => <ForgotPasswordForm {...args} />
