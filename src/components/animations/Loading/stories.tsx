import { Loading } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Loading',
  component: Loading
} as Meta

export const Basic: Story = (args) => <Loading {...args} />
