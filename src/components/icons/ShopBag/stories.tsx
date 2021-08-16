import { ShopBag } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/ShopBag',
  component: ShopBag
} as Meta

export const Basic: Story = (args) => <ShopBag {...args} />
