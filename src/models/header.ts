import { DropdownModel } from './dropdown'
import { LinkModel } from './link'

type Body = (LinkModel | DropdownModel)[]

export type HeaderModel = {
  id: number
  name: string
  body: Body
}
