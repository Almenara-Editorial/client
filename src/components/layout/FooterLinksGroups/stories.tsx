import { FooterLinksGroups, FooterLinksGroupsProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'FooterLinksGroups',
  component: FooterLinksGroups
} as Meta

export const Basic: Story<FooterLinksGroupsProps> = (args) => <FooterLinksGroups {...args} />
