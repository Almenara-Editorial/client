import { PostModel } from '@/models'
import { Container } from './styles'

export type PostTemplateProps = {
  post: PostModel
}

export function PostTemplate({ post }: PostTemplateProps) {
  return <Container>{JSON.stringify(post)}</Container>
}
