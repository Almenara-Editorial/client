import { DropdownModel } from './dropdown'
import { LinkModel } from './link'

type Body = (LinkModel | DropdownModel)[]

export type FooterModel = {
  id: number
  name: string
  body: Body
}

export type SocialModel = {
  name: string
  url: string
}
