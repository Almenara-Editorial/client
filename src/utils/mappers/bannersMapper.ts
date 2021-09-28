/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HeroSliderImageModel } from '@/components/home'
import { QueryHome_home_banner } from '@/graphql/generated/QueryHome'
import { getImageUrl } from '../get-image-url'

export function bannersMapper(
  banners: (QueryHome_home_banner | null)[] | undefined | null
): HeroSliderImageModel[] {
  if (!banners) return []

  return banners.map((banner) => ({
    src: getImageUrl(banner!.image?.url) || '',
    url: banner!.url
  }))
}
