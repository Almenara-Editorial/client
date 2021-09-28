import { TextField } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'form/TextField',
  component: TextField
} as Meta

export const Basic: Story = (args) => {
  return (
    <div
      style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}
    >
      <TextField label="Default Text Field" {...args} />
      <TextField label="Password Field" type="password" {...args} />
      <TextField label="Disabled Field" disabled {...args} />
      <TextField placeholder="Search Field" type="search" {...args} />
    </div>
  )
}
