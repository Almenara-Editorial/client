import { Modal, ModalProps } from '.'
import { Story, Meta } from '@storybook/react'
import { useModal } from '@/hooks'
import { Button } from '../Button'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story<ModalProps> = () => {
  const modal = useModal()
  return (
    <>
      <Modal {...modal}>Modal</Modal>
      {!modal.isOpen && (
        <Button onClick={modal.openModal} size="sm-narrow">
          Abrir modal
        </Button>
      )}
    </>
  )
}

Basic.args = { isOpen: true }
