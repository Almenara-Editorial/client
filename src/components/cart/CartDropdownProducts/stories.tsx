import { CartDropdownProducts } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartDropdownProducts',
  component: CartDropdownProducts,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CartDropdownProducts {...args} />
