import {
  PostCover,
  PostTitle,
  PostContent,
  PostPublication
} from '@/components/post'
import { PostModel } from '@/models'
import { Container } from './styles'

export type PostTemplateProps = {
  post: PostModel
}

export function PostTemplate({ post }: PostTemplateProps) {
  return (
    <Container>
      <PostTitle>{post.title}</PostTitle>
      <PostPublication author={post.author} createdAt={post.createdAt} />
      <PostCover src={post.cover} />
      <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  )
}
