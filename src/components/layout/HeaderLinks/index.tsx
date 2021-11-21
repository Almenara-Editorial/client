import { Dropdown, Link } from '@/components/shared'
import { HeaderModel } from '@/models'
import { Container, ListItem, LinkAnchor } from './styles'

type HeaderLinksProps = {
  links: HeaderModel['body']
}

export function HeaderLinks({ links }: HeaderLinksProps) {
  return (
    <Container>
      {links?.map((item) =>
        item.type !== 'dropdown' ? (
          <ListItem key={item.name}>
            <Link as={LinkAnchor} href={item.url}>
              {item.name}
            </Link>
          </ListItem>
        ) : (
          <ListItem key={item.title}>
            <Dropdown title={item.title} links={item.links} />
          </ListItem>
        )
      )}
    </Container>
  )
}
