import { FilterSidebarGroup } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'FilterSidebarGroup',
  component: FilterSidebarGroup,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <FilterSidebarGroup {...args} />
