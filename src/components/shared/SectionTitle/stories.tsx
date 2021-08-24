import { SectionTitle } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'SectionTitle',
  component: SectionTitle,
  args: {
    children: 'Section title'
  }
} as Meta

export const Basic: Story = (args) => <SectionTitle {...args} />
