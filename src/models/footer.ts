import { LinkModel } from './link'

export type SocialModel = {
  name: string
  url: string
}

export type LinkGroupModel = {
  id: string
  title: string
  links: LinkModel[]
}

export type FooterModel = {
  linksGroups: LinkGroupModel[]
  social: SocialModel[]
}
