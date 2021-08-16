import { Eye } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Eye',
  component: Eye
} as Meta

export const Basic: Story = (args) => <Eye {...args} />
