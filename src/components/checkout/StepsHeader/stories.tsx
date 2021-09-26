import { StepsControls } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'StepsControls',
  component: StepsControls
} as Meta

export const Basic: Story = (args) => <StepsControls {...args} />
