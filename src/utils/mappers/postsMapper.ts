/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PostCardModel, PostModel } from '@/models'
import { getImageUrl } from '../get-image-url'
import { format } from 'date-fns'
import { QueryPostBySlug_posts } from '@/graphql/generated/QueryPostBySlug'
import { QueryBlog_posts } from '@/graphql/generated/QueryBlog'

export function postMapper(post: QueryPostBySlug_posts): PostModel {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug!,
    cover: getImageUrl(post.cover?.url) || '',
    excerpt: post.excerpt || '',
    content: post.content || '',
    createdAt: format(new Date(post.created_at), 'dd/MM/yyyy'),
    author: `${post.user?.firstname} ${post.user?.lastname}`
  }
}

export function postsMapper(posts: QueryBlog_posts[]): PostCardModel[] {
  return posts.map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug!,
    cover: getImageUrl(post.cover?.url) || '',
    excerpt: post.excerpt || '',
    createdAt: format(new Date(post.created_at), 'dd/MM/yyyy'),
    author: `${post.user?.firstname} ${post.user?.lastname}`
  }))
}
