import { SelectAddressButton } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'SelectAddressButton',
  component: SelectAddressButton,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <SelectAddressButton {...args} />
