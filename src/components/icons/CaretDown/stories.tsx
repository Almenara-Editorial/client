import { CaretDown } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CaretDown',
  component: CaretDown,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CaretDown {...args} />
