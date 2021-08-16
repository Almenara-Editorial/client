import { Person } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Person',
  component: Person
} as Meta

export const Basic: Story = (args) => <Person {...args} />
