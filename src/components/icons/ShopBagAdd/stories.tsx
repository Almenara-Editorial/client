import { ShopBagAdd } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/ShopBagAdd',
  component: ShopBagAdd
} as Meta

export const Basic: Story = (args) => <ShopBagAdd {...args} />
