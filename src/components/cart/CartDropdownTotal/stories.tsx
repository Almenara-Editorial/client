import { CartDropdownTotal } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartDropdownTotal',
  component: CartDropdownTotal
} as Meta

export const Basic: Story = (args) => (
  <div style={{ maxWidth: '400px' }}>
    <CartDropdownTotal {...args} />
  </div>
)
