import { CheckoutTotalSum } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CheckoutTotalSum',
  component: CheckoutTotalSum,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CheckoutTotalSum {...args} />
