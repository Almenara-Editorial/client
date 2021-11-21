import { LinkModel } from './link'

export type DropdownModel = {
  title: string
  type: 'dropdown'
  links: LinkModel[]
}
