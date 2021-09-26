import { CheckoutProducts } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CheckoutProducts',
  component: CheckoutProducts,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CheckoutProducts {...args} />
