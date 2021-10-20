import { Quote } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Quote',
  component: Quote,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Quote {...args} />
