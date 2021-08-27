import { CartDropdown, CartDropdownProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartDropdown',
  component: CartDropdown
} as Meta

export const Basic: Story<CartDropdownProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)

Basic.args = {
  products: [
    {
      id: '1',
      name: 'Box 2 - Cartas de Cristo Vol. 1 e Cartas de Cristo Vol. 2',
      price: 30,
      quantity: 1,
      slug: 'box-2',
      imageSrc: 'img/example/book1.png'
    },
    {
      id: '2',
      name: 'Box 2 - Cartas de Cristo Vol. 1 e Cartas de Cristo Vol. 2',
      price: 30,
      quantity: 3,
      slug: 'box-3',
      imageSrc: 'img/example/book2.png'
    }
  ]
}
