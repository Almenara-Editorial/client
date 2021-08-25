import { HeaderActions } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'HeaderActions',
  component: HeaderActions,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <HeaderActions {...args} />
