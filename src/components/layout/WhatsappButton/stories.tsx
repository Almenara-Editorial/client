import { WhatsappButton } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'WhatsappButton',
  component: WhatsappButton,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <WhatsappButton {...args} />
