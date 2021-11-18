import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'
import { Anchor, AnchorProps } from '@/components/shared'
import { UnstyledAnchor } from './styles'

export type LinkProps = Omit<NextLinkProps, 'as'> &
  AnchorProps & {
    as?: string | React.ElementType
  }

export const Link = ({
  children,
  size = 'rg',
  href = '#',
  as = Anchor,
  className,
  color = 'neutral',
  ...rest
}: LinkProps) => {
  return (
    <NextLink {...rest} href={href} passHref>
      <UnstyledAnchor color={color} size={size} as={as} className={className}>
        {children}
      </UnstyledAnchor>
    </NextLink>
  )
}

export default Link
