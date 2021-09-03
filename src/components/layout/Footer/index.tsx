import { FooterLinksGroups, FooterCopyright } from '@/components/layout'
import { FooterModel } from '@/models'
import { Container, Wrapper } from './styles'

export type FooterProps = { footer: FooterModel }

export const Footer = ({ footer }: FooterProps) => (
  <Container>
    <Wrapper>
      <FooterCopyright />
      <FooterLinksGroups linksGroups={footer.linksGroups} />
    </Wrapper>
  </Container>
)

export default Footer
