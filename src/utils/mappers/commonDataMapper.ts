import { Footer } from '@/graphql/generated/Footer'
import { Header } from '@/graphql/generated/Header'
import { footerMapper } from '.'
import { headerMapper } from './headerMapper'

type CommonDataMapperParams = {
  footer: Footer | undefined | null
  header: Header | undefined | null
}

export function commonDataMapper(params: CommonDataMapperParams) {
  if (!params) return null

  return {
    header: params.header ? headerMapper(params.header) : null,
    footer: params.footer ? footerMapper(params.footer) : null
  }
}
