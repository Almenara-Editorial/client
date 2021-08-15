import { Checkmark } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Checkmark',
  component: Checkmark,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Checkmark {...args} />
