import { HeroSlider, HeroSliderProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'HeroSlider',
  component: HeroSlider,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story<HeroSliderProps> = (args) => <HeroSlider {...args} />

Basic.args = {
  images: [
    { src: '/img/example/hero-1.jpg', url: '#' },
    { src: '/img/example/hero-2.jpg', url: '#' }
  ]
}
