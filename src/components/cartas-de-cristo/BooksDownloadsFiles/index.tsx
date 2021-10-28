import { Download } from '@/components/icons'
import { DownloadItem } from '@/models'
import { Container, Item } from './styles'

type BooksDownloadsFilesProps = {
  downloadItems: DownloadItem[]
}

export const BooksDownloadsFiles = ({
  downloadItems
}: BooksDownloadsFilesProps) => {
  return (
    <Container>
      <p>Clique em cada um dos links para iniciar o download dos arquivos:</p>
      {downloadItems.map((item) => (
        <Item
          key={item.title}
          href={item.file}
          target="_blank"
          rel="noreferrer noopener"
        >
          <i>
            <Download />
          </i>
          {item.title}
        </Item>
      ))}
    </Container>
  )
}
