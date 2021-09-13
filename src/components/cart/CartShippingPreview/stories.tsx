import { CartShippingPreview } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartShippingPreview',
  component: CartShippingPreview,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CartShippingPreview {...args} />
