import { CartShippingOption } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartShippingOption',
  component: CartShippingOption,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CartShippingOption {...args} />
