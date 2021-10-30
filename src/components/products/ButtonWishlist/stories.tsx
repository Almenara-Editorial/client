import { ButtonWishlist } from '.'
import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'ButtonWishlist',
  component: ButtonWishlist,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = () => {
  const [isInWishlist, setIsInWishlist] = useState(false)

  return (
    <ButtonWishlist
      productId="1"
      isInWishlist={isInWishlist}
      onClick={() => setIsInWishlist((state) => !state)}
    />
  )
}
