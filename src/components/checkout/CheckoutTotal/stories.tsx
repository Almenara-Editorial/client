import { CheckoutTotal } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CheckoutTotal',
  component: CheckoutTotal,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CheckoutTotal {...args} />
