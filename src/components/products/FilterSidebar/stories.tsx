import { FilterSidebar } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'FilterSidebar',
  component: FilterSidebar,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <FilterSidebar {...args} />
