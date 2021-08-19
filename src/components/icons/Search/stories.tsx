import { Search } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Search',
  component: Search
} as Meta

export const Basic: Story = (args) => <Search {...args} />
