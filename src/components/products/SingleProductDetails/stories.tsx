import { SingleProductDetails } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'SingleProductDetails',
  component: SingleProductDetails,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <SingleProductDetails {...args} />
