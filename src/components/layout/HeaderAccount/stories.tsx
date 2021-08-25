import { HeaderAccount, HeaderAccountProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'HeaderAccount',
  component: HeaderAccount
} as Meta

export const Basic: Story<HeaderAccountProps> = (args) => <HeaderAccount {...args} />

Basic.args = {
  fullName: 'Maria José'
}
