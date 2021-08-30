import { ProductCardGroupTitle } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'ProductCardGroupTitle',
  component: ProductCardGroupTitle,
  args: {
    children: 'ProductCardGroupTitle'
  }
} as Meta

export const Basic: Story = (args) => <ProductCardGroupTitle {...args} />
