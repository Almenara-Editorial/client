import { HeartSolid } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/HeartSolid',
  component: HeartSolid
} as Meta

export const Basic: Story = (args) => <HeartSolid {...args} />
