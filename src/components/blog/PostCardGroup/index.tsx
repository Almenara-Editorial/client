import { PostCardModel } from '@/models'
import { PostCard } from '../PostCard'
import { Container } from './styles'

type PostCardGroupProps = {
  posts: PostCardModel[]
}

export const PostCardGroup = ({ posts }: PostCardGroupProps) => (
  <Container>
    {posts?.map((post) => (
      <PostCard post={post} key={post.id} />
    ))}
  </Container>
)
