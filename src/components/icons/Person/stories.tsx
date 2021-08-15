import { Person } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Person',
  component: Person,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Person {...args} />
