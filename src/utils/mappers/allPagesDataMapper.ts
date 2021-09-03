/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FooterFragment } from '@/graphql/generated/FooterFragment'

export function footerMapper(data: FooterFragment) {
  return {
    linksGroups: data.links?.map((group) => ({
      id: group!.id,
      links: group!.link?.map((link) => ({
        id: link?.id,
        name: link?.name,
        url: link?.url
      })),
      title: group!.title!
    }))
  }
}
