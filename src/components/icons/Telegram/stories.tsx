import { Telegram } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Telegram',
  component: Telegram
} as Meta

export const Basic: Story = (args) => <Telegram {...args} />
