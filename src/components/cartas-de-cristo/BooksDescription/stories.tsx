import { BooksDescription } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'BooksDescription',
  component: BooksDescription,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <BooksDescription {...args} />
