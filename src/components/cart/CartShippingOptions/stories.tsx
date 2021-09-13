import { CartShippingOptions } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartShippingOptions',
  component: CartShippingOptions,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CartShippingOptions {...args} />
