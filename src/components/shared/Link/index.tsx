import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'
import { Anchor, AnchorProps } from '@/components/shared'

export type LinkProps = Omit<NextLinkProps, 'as'> & AnchorProps

export const Link = ({ children, size = 'rg', color = 'neutral', ...rest }: LinkProps) => {
  return (
    <NextLink {...rest} passHref>
      <Anchor color={color} size={size}>
        {children}
      </Anchor>
    </NextLink>
  )
}

export default Link
