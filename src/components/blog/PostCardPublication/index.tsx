import { PostCardModel } from '@/models'
import { Container } from './styles'

type PostCardPublicationProps = Pick<PostCardModel, 'createdAt' | 'author'>

export const PostCardPublication = ({
  createdAt,
  author
}: PostCardPublicationProps) => (
  <Container>
    <span>{author}</span>
    <span>{createdAt}</span>
  </Container>
)
