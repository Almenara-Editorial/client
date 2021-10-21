import { BooksGroup } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'BooksGroup',
  component: BooksGroup,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <BooksGroup {...args} />
