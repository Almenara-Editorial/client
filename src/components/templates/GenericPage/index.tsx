import { CmsContent } from '@/components/shared'

type Page = {
  name: string
  content: string
}

export type GenericPageTemplateProps = {
  page: Page
}

export function GenericPageTemplate({ page }: GenericPageTemplateProps) {
  return <CmsContent dangerouslySetInnerHTML={{ __html: page?.content }} />
}
