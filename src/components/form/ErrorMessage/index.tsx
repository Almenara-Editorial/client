import { CircleInfo } from '@/components/icons'
import { Container } from './styles'

type ErrorMessageProps = {
  error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <Container>
      <i>
        <CircleInfo />
      </i>
      {error}
    </Container>
  )
}
