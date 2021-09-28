import { CartDropdownProduct, CartDropdownProductProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartDropdownProduct',
  component: CartDropdownProduct
} as Meta

export const Basic: Story<CartDropdownProductProps> = (args) => (
  <CartDropdownProduct {...args} />
)

Basic.args = {
  product: {
    id: '1',
    name: 'Box 2 - Cartas de Cristo Vol. 1 e Cartas de Cristo Vol. 2',
    price: 30,
    imageSrc: 'img/example/book1.png',
    quantity: 2,
    slug: 'ahsush'
  }
}
