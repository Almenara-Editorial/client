import { Close } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Close',
  component: Close,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Close {...args} />
