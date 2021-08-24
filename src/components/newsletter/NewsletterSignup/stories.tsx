import { NewsletterSignup } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'newsletter/NewsletterSignup',
  component: NewsletterSignup
} as Meta

export const Basic: Story = (args) => <NewsletterSignup {...args} />
