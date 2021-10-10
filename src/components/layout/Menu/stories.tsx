import { Menu } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Menu {...args} />
