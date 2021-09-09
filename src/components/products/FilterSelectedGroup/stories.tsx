import { FilterSelectedGroup } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'FilterSelectedGroup',
  component: FilterSelectedGroup,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <FilterSelectedGroup {...args} />
