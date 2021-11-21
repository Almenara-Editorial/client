import { PostCardGroup } from '@/components/blog/PostCardGroup'
import { PostModel } from '@/models'
import Head from 'next/head'
import { Container, Title } from './styles'

export type BlogTemplateProps = {
  posts: PostModel[]
}

export function BlogTemplate({ posts }: BlogTemplateProps) {
  return (
    <>
      <Head>
        <title>Almenara Editorial - Blog</title>
      </Head>
      <Container>
        <Title>Blog</Title>
        <PostCardGroup posts={posts} />
      </Container>
    </>
  )
}
