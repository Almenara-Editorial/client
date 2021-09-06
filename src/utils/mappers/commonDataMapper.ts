import { Footer } from '@/graphql/generated/Footer'
import { footerMapper } from '.'

type CommonDataMapperParams = {
  footer: Footer | undefined | null
}

export function commonDataMapper(params: CommonDataMapperParams) {
  if (!params) return null

  return {
    footer: params.footer ? footerMapper(params.footer) : null
  }
}
