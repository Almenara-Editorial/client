import { FieldGroup } from '.'
import { Story, Meta } from '@storybook/react'
import { TextField } from '@/components/form'
import { Button } from '@/components/shared'

export default {
  title: 'form/FieldGroup',
  component: FieldGroup
} as Meta

export const Basic: Story = () => (
  <FieldGroup>
    <TextField placeholder="80000-000" />
    <Button outline color="neutral">
      ok
    </Button>
  </FieldGroup>
)
