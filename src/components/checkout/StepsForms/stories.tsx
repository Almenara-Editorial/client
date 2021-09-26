import { StepsForms } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'StepsForms',
  component: StepsForms,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <StepsForms {...args} />
