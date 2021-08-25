import { ShippingAddressModal, ShippingAddressModalProps } from '.'
import { Story, Meta } from '@storybook/react'
import { useModal } from '@/hooks'
import { Button } from '@/components/shared'

export default {
  title: 'ShippingAddressModal',
  component: ShippingAddressModal
} as Meta

export const Basic: Story<ShippingAddressModalProps> = () => {
  const modal = useModal()

  if (!modal.isOpen)
    return (
      <Button onClick={modal.openModal} size="sm-narrow">
        Abrir modal
      </Button>
    )

  return <ShippingAddressModal {...modal} />
}
