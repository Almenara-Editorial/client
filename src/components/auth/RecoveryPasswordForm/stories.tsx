import { RecoveryPasswordForm } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'RecoveryPasswordForm',
  component: RecoveryPasswordForm
} as Meta

export const Basic: Story = (args) => <RecoveryPasswordForm {...args} />
