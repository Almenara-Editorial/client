import { FooterModel } from '@/models'
import { FooterLinksGroup } from '..'
import { Container } from './styles'

export type FooterLinksGroupsProps = {
  body: FooterModel['body']
}

export const FooterLinksGroups = ({ body }: FooterLinksGroupsProps) => {
  if (!body) return null

  return (
    <Container>
      {body?.map(
        (linksGroup) =>
          linksGroup.type === 'dropdown' && (
            <FooterLinksGroup key={linksGroup.title} linksGroup={linksGroup} />
          )
      )}
    </Container>
  )
}
