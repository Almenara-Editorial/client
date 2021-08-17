import { ButtonAddToCart } from '.'
import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'ButtonAddToCart',
  component: ButtonAddToCart,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = () => {
  const [isInCart, setIsInCart] = useState(false)

  return (
    <div>
      <ButtonAddToCart isInCart={isInCart} onClick={() => setIsInCart((state) => !state)} />
    </div>
  )
}
