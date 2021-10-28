import { Modal } from '@/components/shared'
import { Container } from './styles'
import { UseModalData } from '@/hooks'
import { CustomScrollbar } from '@/components/shared/CustomScrollbar'
import { BooksDownloadsForm } from '../BooksDownloadsForm'
import { DownloadItem } from '@/models'
import { useState } from 'react'
import { BooksDownloadsFiles } from '../BooksDownloadsFiles'

type DownloadsModalProps = UseModalData & {
  downloadItems: DownloadItem[]
}

export const DownloadsModal = ({
  downloadItems,
  ...modalMethods
}: DownloadsModalProps) => {
  const [isFormSuccess, setIsFormSuccess] = useState(false)

  function onFormSuccess() {
    setIsFormSuccess(true)
  }

  return (
    <Modal {...modalMethods} as={Container}>
      <CustomScrollbar autoHeight autoHeightMin="43rem">
        {!isFormSuccess && <BooksDownloadsForm onFormSuccess={onFormSuccess} />}
        {isFormSuccess && downloadItems && (
          <BooksDownloadsFiles downloadItems={downloadItems} />
        )}
      </CustomScrollbar>
    </Modal>
  )
}
