import { ProductCard } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'ProductCard',
  component: ProductCard,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <ProductCard {...args} />
