import { CartSummary } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartSummary',
  component: CartSummary,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CartSummary {...args} />
