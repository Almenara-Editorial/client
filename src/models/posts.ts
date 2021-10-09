export type PostModel = {
  id: string
  title: string
  cover: string
  excerpt?: string
  content: string
  createdAt: string
  author: string
  slug: string
}

export type PostCardModel = Pick<
  PostModel,
  'id' | 'excerpt' | 'title' | 'cover' | 'createdAt' | 'author' | 'slug'
>
