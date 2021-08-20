import { Select } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'form/Select',
  component: Select
} as Meta

export const Basic: Story = (args) => (
  <Select
    options={[
      { text: 'Opção 1', value: '1' },
      { text: 'Opção 2', value: '2' },
      { text: 'Opção 3', value: '3' },
      { text: 'Opção 4', value: '4' }
    ]}
    {...args}
  />
)
