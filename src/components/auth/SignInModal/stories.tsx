import { LoginModal } from '.'
import { Story, Meta } from '@storybook/react'
import { Button } from '@/components/shared'
import { useModal } from '@/hooks'

export default {
  title: 'auth/LoginModal',
  component: LoginModal
} as Meta

export const Basic: Story = () => {
  const modal = useModal()

  if (!modal.isOpen)
    return (
      <Button onClick={modal.openModal} size="sm-narrow">
        Abrir modal
      </Button>
    )

  return <LoginModal {...modal} />
}
