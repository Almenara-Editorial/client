import { ProductsCards } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'ProductsCards',
  component: ProductsCards,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <ProductsCards {...args} />
