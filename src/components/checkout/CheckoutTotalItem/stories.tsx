import { CheckoutTotalItem } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CheckoutTotalItem',
  component: CheckoutTotalItem,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CheckoutTotalItem {...args} />
