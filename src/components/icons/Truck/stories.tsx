import { Truck } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/Truck',
  component: Truck
} as Meta

export const Basic: Story = (args) => <Truck {...args} />
