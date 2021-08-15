import { ShopBag } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'ShopBag',
  component: ShopBag,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <ShopBag {...args} />
