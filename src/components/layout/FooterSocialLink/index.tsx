import { Container } from './styles'
import {
  Email,
  Facebook,
  Instagram,
  Telegram,
  Whatsapp,
  Youtube
} from '@/components/icons'
import { SocialModel } from '@/models'
import { Link } from '@/components/shared'

type FooterSocialLinkProps = {
  link: SocialModel
}

const iconMapper = {
  facebook: Facebook,
  whatsapp: Whatsapp,
  instagram: Instagram,
  telegram: Telegram,
  youtube: Youtube,
  email: Email
}

export const FooterSocialLink = ({ link }: FooterSocialLinkProps) => {
  const Icon = iconMapper[link.name as keyof typeof iconMapper] || null

  if (!Icon) return null

  return (
    <Link as={Container} href={link.url}>
      <Icon />
    </Link>
  )
}

export default FooterSocialLink
