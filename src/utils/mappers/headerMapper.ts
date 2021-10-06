/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Header } from '@/graphql/generated/Header'

export function headerMapper(data: Header) {
  return {
    links: data.links?.map((link) => ({
      name: link!.name,
      url: link!.url
    }))
  }
}
