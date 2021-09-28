import { LinkGroupModel } from '@/models'
import { FooterLinksGroup } from '..'
import { Container } from './styles'

export type FooterLinksGroupsProps = {
  linksGroups: LinkGroupModel[]
}

export const FooterLinksGroups = ({ linksGroups }: FooterLinksGroupsProps) => {
  if (!linksGroups) return null

  return (
    <Container>
      {linksGroups?.map((linksGroup) => (
        <FooterLinksGroup key={linksGroup.title} linksGroup={linksGroup} />
      ))}
    </Container>
  )
}
