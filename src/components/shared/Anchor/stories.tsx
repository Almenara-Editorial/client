import { Anchor, AnchorProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Anchor',
  component: Anchor
} as Meta

export const Basic: Story<AnchorProps> = (args) => <Anchor {...args} />

Basic.args = {
  children: 'Anchor',
  size: 'rg',
  color: 'neutral'
}
