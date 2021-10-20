import { HeroBanner } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'HeroBanner',
  component: HeroBanner,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <HeroBanner {...args} />
