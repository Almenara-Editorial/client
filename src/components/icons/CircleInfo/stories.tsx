import { CircleInfo } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/CircleInfo',
  component: CircleInfo
} as Meta

export const Basic: Story = (args) => <CircleInfo {...args} />
