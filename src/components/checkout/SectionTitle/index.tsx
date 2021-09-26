import { Anchor } from '@/components/shared'
import { Container } from './styles'

type SectionTitleProps = {
  title: string
  buttonText?: string
  onClickButon?: () => void
}

export function SectionTitle({
  title,
  buttonText,
  onClickButon
}: SectionTitleProps) {
  return (
    <Container>
      <span>{title}</span>
      {buttonText && (
        <Anchor size="sm" color="primary" as="button" onClick={onClickButon}>
          {buttonText}
        </Anchor>
      )}
    </Container>
  )
}
