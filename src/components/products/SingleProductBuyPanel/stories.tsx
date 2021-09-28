import { SingleProductBuyPanel, SingleProductBuyPanelProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'SingleProductBuyPanel',
  component: SingleProductBuyPanel
} as Meta

export const Basic: Story<SingleProductBuyPanelProps> = (args) => (
  <SingleProductBuyPanel {...args} />
)

Basic.args = {
  name: 'Telos Livro Três Protocolos da Quinta Dimensão',
  price: 59.9,
  installments: 'Em até 3x de R$ 30,13 sem juros',
  stock: 20
}
