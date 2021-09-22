import { LoginModalForm } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'LoginModalForm',
  component: LoginModalForm,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <LoginModalForm {...args} />
