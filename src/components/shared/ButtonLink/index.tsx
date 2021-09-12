import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { Button, ButtonProps } from '@/components/shared'

export type ButtonLinkProps = Pick<NextLinkProps, 'href'> &
  Omit<ButtonProps, 'as'> & { children: React.ReactNode }

export const ButtonLink = ({ href, ...rest }: ButtonLinkProps) => (
  <NextLink href={href} passHref>
    <Button as="a" {...rest} />
  </NextLink>
)

export default ButtonLink
