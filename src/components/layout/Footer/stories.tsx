import { Footer } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Footer {...args} />
