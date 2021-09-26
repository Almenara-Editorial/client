import { Steps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Steps',
  component: Steps
} as Meta

export const Basic: Story = (args) => <Steps {...args} />
