import { ShopBagSolid } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/ShopBagSolid',
  component: ShopBagSolid
} as Meta

export const Basic: Story = (args) => <ShopBagSolid {...args} />
