import { FooterLinksGroup } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'FooterLinksGroup',
  component: FooterLinksGroup,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <FooterLinksGroup {...args} />
