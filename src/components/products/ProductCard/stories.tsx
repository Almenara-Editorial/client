import { ProductCard, ProductCardProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'ProductCard',
  component: ProductCard
} as Meta

export const Basic: Story<ProductCardProps> = (args) => (
  <ProductCard {...args} />
)

Basic.args = {
  product: {
    id: '1',
    imageSrc: '/img/example/book1.png',
    name: 'Box 2 - Cartas de Cristo Vol. 1 e Cartas de Cristo Vol. 2',
    price: 30,
    slug: 'cartas-de-cristo'
  },
  withBuyButton: true,
  withAddToCartButton: false,
  offPercentage: 50
}
