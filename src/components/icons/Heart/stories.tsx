import { Heart } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Heart',
  component: Heart,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Heart {...args} />
