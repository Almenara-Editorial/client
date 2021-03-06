import { SignInModal } from '.'
import { Story, Meta } from '@storybook/react'
import { Button } from '@/components/shared'
import { useModal } from '@/hooks'

export default {
  title: 'auth/SignInModal',
  component: SignInModal
} as Meta

export const Basic: Story = () => {
  const modal = useModal()

  if (!modal.isOpen)
    return (
      <Button onClick={modal.openModal} size="sm-narrow">
        Abrir modal
      </Button>
    )

  return <SignInModal {...modal} />
}
