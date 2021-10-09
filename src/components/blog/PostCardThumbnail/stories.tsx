import { PostCardThumbnail } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'PostCardThumbnail',
  component: PostCardThumbnail,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <PostCardThumbnail {...args} />
