import { Container } from './styles'
import { Download } from '@/components/icons'

type DownloadButtonProps = {
  url: string
  text: string
}

export function DownloadButton({ url, text }: DownloadButtonProps) {
  function handleDownload() {
    window.open(url)
  }

  return (
    <Container onClick={handleDownload} color="primary">
      <i>
        <Download />
      </i>
      {text}
    </Container>
  )
}
