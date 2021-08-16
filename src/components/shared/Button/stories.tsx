import { Button } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Basic: Story = () => (
  <div style={{ display: 'flex', gap: '3.2rem', flexWrap: 'wrap' }}>
    <Button>Button default</Button>
    <Button color="neutral">Button default</Button>
    <Button outline>Button outline</Button>
    <Button outline color="neutral">
      Button outline
    </Button>
    <Button disabled outline color="neutral">
      Button disabled
    </Button>

    <Button size="sm-medium">Button default</Button>
    <Button size="sm-medium" color="neutral">
      Button default
    </Button>
    <Button size="sm-medium" outline>
      Button outline
    </Button>
    <Button size="sm-medium" outline color="neutral">
      Button outline
    </Button>
    <Button size="sm-medium" disabled outline color="neutral">
      Button disabled
    </Button>
  </div>
)
