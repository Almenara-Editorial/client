import { ParsedUrlQuery } from 'querystring'

// export const parseQueryStringToWhere = ({ queryString }: ParseArgs) => {
//   console.log(queryString)
// }

export const parseQueryToWhere = (query: ParsedUrlQuery) => {
  const where: Record<string, unknown> = {}

  Object.entries(query).forEach(([key, value]) => {
    if (key === 's') {
      where['name_contains'] = value
    } else {
      where[key] = { slug: value }
    }
  })

  return where
}

export const parseQueryToFilter = (query: ParsedUrlQuery) => {
  const filter: Record<string, string[]> = {}

  Object.entries(query).forEach(([key, value]) => {
    if (!key || !value) return

    filter[key] = typeof value !== 'object' ? [value] : value
  })

  return filter
}
