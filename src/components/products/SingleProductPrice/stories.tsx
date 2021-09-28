import { SingleProductPrice, SingleProductPriceProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'SingleProductPrice',
  component: SingleProductPrice
} as Meta

export const Basic: Story<SingleProductPriceProps> = (args) => (
  <SingleProductPrice {...args} />
)

Basic.args = {
  price: 59.9,
  installments: 'Em até 3x de R$ 30,13 sem juros'
}
