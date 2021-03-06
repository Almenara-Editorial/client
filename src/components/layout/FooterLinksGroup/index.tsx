import { Link } from '@/components/shared'
import { DropdownModel } from '@/models'
import { Container, Title, Anchor } from './styles'

type FooterLinksGroupProps = {
  linksGroup: Omit<DropdownModel, 'type'>
}

export const FooterLinksGroup = ({ linksGroup }: FooterLinksGroupProps) => (
  <Container>
    <Title>{linksGroup.title}</Title>
    <ul>
      {linksGroup.links?.map((link) => (
        <li key={link.name}>
          <Link href={link.url} as={Anchor}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </Container>
)
