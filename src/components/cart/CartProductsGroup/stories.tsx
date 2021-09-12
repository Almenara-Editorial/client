import { CartProductsGroup } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartProductsGroup',
  component: CartProductsGroup,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CartProductsGroup {...args} />
