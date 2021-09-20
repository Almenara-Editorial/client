import { SigninButton } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'SigninButton',
  component: SigninButton
} as Meta

export const Basic: Story = (args) => <SigninButton {...args} />
