import { api } from './api'

type Link = {
  type: string
  name: string
  url: string
}

type Dropdown = {
  title: string
  links: Link[]
}

type Body = (Link | Dropdown)[]

type Header = {
  id: number
  name: string
  body: Body
}

export async function loadCommonMenus() {
  const [{ data: header }, { data: footer }] = await Promise.all([
    api.get<Header>('menus?m=header'),
    api.get<Header>('menus?m=footer')
  ])

  return { header, footer }
}
