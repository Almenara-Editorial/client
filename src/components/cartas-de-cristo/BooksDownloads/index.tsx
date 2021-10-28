import { Download } from '@/components/icons'
import { useModal } from '@/hooks'
import { DownloadItem } from '@/models'
import { BooksDownloadsContent } from '../BooksDownloadsContent'
import { DownloadsModal } from '../DownloadsModal'
import { Container, DownloadIcon } from './styles'

type BooksDownloadsProps = {
  downloadItems: DownloadItem[]
}

export const BooksDownloads = ({ downloadItems }: BooksDownloadsProps) => {
  const modalMethods = useModal()

  return (
    <Container>
      <DownloadIcon>
        <DownloadsModal {...modalMethods} downloadItems={downloadItems} />
        <button onClick={modalMethods.openModal}>
          <i>
            <Download />
          </i>
          <p>Fazer o download dos livros</p>
        </button>
      </DownloadIcon>
      <BooksDownloadsContent />
    </Container>
  )
}
