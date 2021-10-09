import { PostModel } from '@/models'
import { Container } from './styles'

export type BlogTemplateProps = {
  posts: PostModel[]
}

export function BlogTemplate({ posts }: BlogTemplateProps) {
  return <Container>{JSON.stringify(posts)}</Container>
}
