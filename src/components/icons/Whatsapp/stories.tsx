import { Whatsapp } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Whatsapp',
  component: Whatsapp
} as Meta

export const Basic: Story = (args) => <Whatsapp {...args} />
