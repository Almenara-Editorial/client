import { Link, LinkProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Link',
  component: Link
} as Meta

export const Basic: Story<LinkProps> = (args) => <Link {...args} />

Basic.args = {
  children: 'Link',
  href: '#',
  size: 'rg',
  color: 'neutral'
}
