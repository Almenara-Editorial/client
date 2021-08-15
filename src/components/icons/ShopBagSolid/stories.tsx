import { ShopBagSolid } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'ShopBagSolid',
  component: ShopBagSolid,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <ShopBagSolid {...args} />
