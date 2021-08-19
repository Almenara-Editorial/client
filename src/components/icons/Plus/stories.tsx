import { Plus } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Plus',
  component: Plus
} as Meta

export const Basic: Story = (args) => <Plus {...args} />
