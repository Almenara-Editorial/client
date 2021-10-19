import { ContactForm } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'ContactForm',
  component: ContactForm,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <ContactForm {...args} />
