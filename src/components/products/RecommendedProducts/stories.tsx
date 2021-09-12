import { RecommendedProducts } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'RecommendedProducts',
  component: RecommendedProducts,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <RecommendedProducts {...args} />
