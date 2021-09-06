import { Instagram } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Instagram',
  component: Instagram
} as Meta

export const Basic: Story = (args) => <Instagram {...args} />
