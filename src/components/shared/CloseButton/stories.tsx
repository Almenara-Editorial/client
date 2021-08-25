import { CloseButton } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CloseButton',
  component: CloseButton,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CloseButton {...args} />
