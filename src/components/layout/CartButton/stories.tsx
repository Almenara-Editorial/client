import { CartButton } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartButton',
  component: CartButton,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CartButton {...args} />
