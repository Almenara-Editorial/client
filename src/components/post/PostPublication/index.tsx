import { PostModel } from '@/models'
import { Container } from './styles'

type PostPublicationProps = Pick<PostModel, 'author' | 'createdAt'>

export function PostPublication({ author, createdAt }: PostPublicationProps) {
  return (
    <Container>
      <div>Por: {author}</div>
      <span />
      <div>{createdAt}</div>
    </Container>
  )
}
