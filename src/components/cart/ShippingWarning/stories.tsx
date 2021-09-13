import { ShippingWarning } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'ShippingWarning',
  component: ShippingWarning,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <ShippingWarning {...args} />
