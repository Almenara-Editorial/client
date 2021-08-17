import { MediaMatch } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'icons/MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => <MediaMatch greaterThan="medium">Only on desktop</MediaMatch>
export const Mobile: Story = () => <MediaMatch lessThan="medium">Only on mobile</MediaMatch>

Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop1'
  }
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
