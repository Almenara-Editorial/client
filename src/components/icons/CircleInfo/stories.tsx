import { CircleInfo } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CircleInfo',
  component: CircleInfo,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CircleInfo {...args} />
