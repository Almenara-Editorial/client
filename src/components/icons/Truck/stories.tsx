import { Truck } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Truck',
  component: Truck,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Truck {...args} />
