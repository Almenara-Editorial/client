import { Youtube } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Youtube',
  component: Youtube
} as Meta

export const Basic: Story = (args) => <Youtube {...args} />
