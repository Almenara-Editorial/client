import { CartProduct } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartProduct',
  component: CartProduct,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CartProduct {...args} />
