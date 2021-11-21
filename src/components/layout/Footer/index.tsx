import { FooterLinksGroups, FooterCopyright, FooterSocialLinks } from '..'
import { FooterModel } from '@/models'
import { Container, Wrapper } from './styles'

export type FooterProps = { footer: FooterModel }

export const Footer = ({ footer }: FooterProps) => (
  <Container>
    <Wrapper>
      <FooterLinksGroups body={footer?.body} />
      <FooterCopyright />
      {/* <FooterSocialLinks social={footer?.social} /> */}
    </Wrapper>
  </Container>
)

export default Footer
