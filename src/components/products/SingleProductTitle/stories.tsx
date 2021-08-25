import { SingleProductTitle } from './index'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'SingleProductTitle',
  component: SingleProductTitle
} as Meta

export const Basic: Story = (args) => <SingleProductTitle {...args} />

Basic.args = {
  children: 'Telos Livro Três Protocolos da Quinta Dimensão'
}
