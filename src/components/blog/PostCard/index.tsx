import { PostCardModel } from '@/models'
import { PostCardExcerpt } from '../PostCardExcerpt'
import { PostCardThumbnail } from '../PostCardThumbnail'
import { PostCardTitle } from '../PostCardTitle'
import { PostCardPublication } from '../PostCardPublication'
import { Container } from './styles'
import { Link } from '@/components/shared'

type PostCardProps = {
  post: PostCardModel
}

export const PostCard = ({ post }: PostCardProps) => (
  <Link as={Container} href={'/blog/' + post.slug}>
    <PostCardThumbnail src={post.cover} />
    <PostCardTitle>{post.title}</PostCardTitle>
    <PostCardPublication createdAt={post.createdAt} author={post.author} />
    <PostCardExcerpt>{post.title}</PostCardExcerpt>
  </Link>
)
