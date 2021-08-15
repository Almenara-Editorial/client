import { Eye } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Eye',
  component: Eye,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Eye {...args} />
