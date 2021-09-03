import { Link } from '@/components/shared'
import { LinkGroupModel } from '@/models'
import { Container, Title, Anchor } from './styles'

type FooterLinksGroupProps = {
  linksGroup: LinkGroupModel
}

export const FooterLinksGroup = ({ linksGroup }: FooterLinksGroupProps) => (
  <Container>
    <Title>{linksGroup.title}</Title>
    <ul>
      {linksGroup.links.map((link) => (
        <li key={link.url}>
          <Link href={link.url} as={Anchor}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </Container>
)
