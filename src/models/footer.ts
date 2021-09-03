export type LinkModel = {
  id: string
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
}
