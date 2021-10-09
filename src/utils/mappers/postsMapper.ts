/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { QueryBlog_posts } from '@/graphql/generated/QueryBlog'
import { PostModel } from '@/models'

export function postsMapper(posts: QueryBlog_posts[]): PostModel[] {
  return posts.map((post) => ({
    id: post.id,
    title: post.title,
    cover: post.cover?.url || '',
    content: post.content
  }))
}
