import { ProductCard } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'ProductCard',
  component: ProductCard
} as Meta

export const Basic: Story = (args) => <ProductCard {...args} />
