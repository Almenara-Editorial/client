import { CaretDownSolid } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'CaretDownSolid',
  component: CaretDownSolid,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <CaretDownSolid {...args} />
