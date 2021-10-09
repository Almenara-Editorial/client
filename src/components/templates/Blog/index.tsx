import { PostCardGroup } from '@/components/blog/PostCardGroup'
import { PostModel } from '@/models'
import { Container, Title } from './styles'

export type BlogTemplateProps = {
  posts: PostModel[]
}

export function BlogTemplate({ posts }: BlogTemplateProps) {
  return (
    <Container>
      <Title>Blog</Title>
      <PostCardGroup posts={posts} />
    </Container>
  )
}
