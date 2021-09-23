import { SignInForm } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'SignInForm',
  component: SignInForm,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <SignInForm {...args} />
