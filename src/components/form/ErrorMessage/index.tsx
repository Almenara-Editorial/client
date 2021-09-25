import { CircleInfo } from '@/components/icons'
import { Container } from './styles'

type ErrorMessageProps = {
  error: string
  align?: 'center' | 'left' | 'right'
}

export function ErrorMessage({ error, align = 'left' }: ErrorMessageProps) {
  return (
    <Container data-align={align}>
      <i>
        <CircleInfo />
      </i>
      {error}
    </Container>
  )
}
