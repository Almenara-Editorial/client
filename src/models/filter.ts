export type FilterItemModel = {
  name: string
  slug: string
}

export type FilterItemsGroupModel = {
  title: string
  slug: string
  items: FilterItemModel[]
}
