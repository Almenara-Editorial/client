import { CartProductCard, CartProductCardProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartProductCard',
  component: CartProductCard
} as Meta

export const Basic: Story<CartProductCardProps> = (args) => <CartProductCard {...args} />

Basic.args = {
  product: {
    thumbnailSrc: '/img/example/book1.png',
    name: 'Box 2 - Cartas de Cristo Vol. 1 e Cartas de Cristo Vol. 2',
    price: 30,
    slug: 'cartas-de-cristo'
  }
}
