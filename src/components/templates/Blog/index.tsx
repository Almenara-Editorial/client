import { PostCardGroup } from '@/components/blog/PostCardGroup'
import { PostModel } from '@/models'
import { Container } from './styles'

export type BlogTemplateProps = {
  posts: PostModel[]
}

export function BlogTemplate({ posts }: BlogTemplateProps) {
  return (
    <Container>
      <PostCardGroup posts={posts} />
    </Container>
  )
}
