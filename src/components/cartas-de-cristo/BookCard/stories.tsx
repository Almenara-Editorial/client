import { BookCard } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'BookCard',
  component: BookCard,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <BookCard {...args} />
