import { Link } from '@/components/shared'
import { Container, LinkAnchor } from './styles'

export type HeaderLink = {
  url: string
  name: string
}

type HeaderLinksProps = {
  links: HeaderLink[]
}

export function HeaderLinks({ links }: HeaderLinksProps) {
  return (
    <Container>
      {links?.map((link) => (
        <Link as={LinkAnchor} href={link.url} key={link.name}>
          {link.name}
        </Link>
      ))}
    </Container>
  )
}
