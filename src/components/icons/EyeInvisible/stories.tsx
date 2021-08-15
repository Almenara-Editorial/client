import { EyeInvisible } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'EyeInvisible',
  component: EyeInvisible,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <EyeInvisible {...args} />
