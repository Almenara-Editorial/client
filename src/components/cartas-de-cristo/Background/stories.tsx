import { Background } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Background',
  component: Background,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Background {...args} />
