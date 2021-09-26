import { Layout } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Layout',
  component: Layout,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Layout {...args} />
