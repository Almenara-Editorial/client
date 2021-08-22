import { Button } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Basic: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3.2rem' }}>
    <div style={{ display: 'flex', gap: '3.2rem', flexWrap: 'wrap' }}>
      <Button size="rg-medium">Button default</Button>
      <Button size="rg-medium" color="neutral">
        Button default
      </Button>
      <Button size="rg-medium" isLoading outline color="neutral">
        Button disabled
      </Button>
      <Button size="rg-medium" outline>
        Button outline
      </Button>
      <Button size="rg-medium" outline color="neutral">
        Button outline
      </Button>
      <Button size="rg-medium" disabled outline color="neutral">
        Button disabled
      </Button>
    </div>
    <div style={{ display: 'flex', gap: '3.2rem', flexWrap: 'wrap' }}>
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
  </div>
)
