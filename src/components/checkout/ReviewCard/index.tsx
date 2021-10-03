import { Container, Title, Content } from './styles'

type ReviewCardProps = {
  title: string
  content: React.ReactNode
}

export function ReviewCard({ title, content }: ReviewCardProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  )
}
