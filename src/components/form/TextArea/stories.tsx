import { TextArea } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'form/TextArea',
  component: TextArea
} as Meta

export const Basic: Story = (args) => {
  return (
    <div
      style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}
    >
      <TextArea label="Default Text aREA" {...args} />
    </div>
  )
}
