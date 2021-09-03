import { FooterCopyright } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'FooterCopyright',
  component: FooterCopyright,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <FooterCopyright {...args} />
