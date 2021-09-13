import { CartShippingForm } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartShippingForm',
  component: CartShippingForm,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CartShippingForm {...args} />
