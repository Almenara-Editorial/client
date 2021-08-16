import { Logo } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Logo',
  component: Logo,
  args: {
    title: 'icons/React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Logo {...args} />
