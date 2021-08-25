import { Dialog } from '@headlessui/react'

import { UseModalData } from '@/hooks'
import { CloseButton } from '..'
import { Container, Overlay } from './styles'

export type ModalProps = Omit<UseModalData, 'openModal'> & {
  as?: string | React.ElementType
  children: React.ReactNode
}

export const Modal = ({ isOpen, closeModal, children, as }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <Dialog.Overlay as={Overlay} />
      <Container as={as}>
        <CloseButton aria-label="Fechar" onClick={closeModal} />
        {children}
      </Container>
    </Dialog>
  )
}

export default Modal
