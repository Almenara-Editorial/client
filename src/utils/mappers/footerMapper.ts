/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Footer } from '@/graphql/generated/Footer'

export function footerMapper(data: Footer) {
  return {
    linksGroups: data.links?.map((group) => ({
      id: group!.id,
      links: group!.link?.map((link) => ({
        id: link?.id,
        name: link?.name,
        url: link?.url
      })),
      title: group!.title!
    })),
    social: data?.social
  }
}
