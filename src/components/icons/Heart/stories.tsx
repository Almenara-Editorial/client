import { Heart } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Heart',
  component: Heart
} as Meta

export const Basic: Story = (args) => <Heart {...args} />
