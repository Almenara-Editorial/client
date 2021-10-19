import { CmsContent } from '@/components/shared'

export type TermsOfUseTemplateProps = {
  content: string
}

export function TermsOfUseTemplate({ content }: TermsOfUseTemplateProps) {
  return <CmsContent dangerouslySetInnerHTML={{ __html: content }} />
}
