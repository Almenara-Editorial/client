import { StepsButtons } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'StepsButtons',
  component: StepsButtons
} as Meta

export const Basic: Story = (args) => <StepsButtons {...args} />
