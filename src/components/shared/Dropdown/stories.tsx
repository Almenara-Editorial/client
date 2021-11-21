import { Dropdown } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Dropdown {...args} />
