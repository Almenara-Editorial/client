import { useState } from 'react'

export type UseModalData = {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export function useModal(): UseModalData {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return { isOpen, openModal, closeModal }
}
