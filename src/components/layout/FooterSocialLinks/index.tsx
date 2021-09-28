import { SocialModel } from '@/models'
import { FooterSocialLink } from '..'
import { Container } from './styles'

type FooterSocialLinksProps = {
  social: SocialModel[]
}

export const FooterSocialLinks = ({ social }: FooterSocialLinksProps) => (
  <Container>
    {social?.map((link) => (
      <FooterSocialLink key={link.name} link={link} />
    ))}
  </Container>
)

export default FooterSocialLinks
