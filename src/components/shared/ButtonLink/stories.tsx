import { ButtonLink, ButtonLinkProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'ButtonLink',
  component: ButtonLink
} as Meta

export const Basic: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />

Basic.args = {
  href: '#',
  children: 'Button link'
}
