import { CmsContent } from '@/components/shared'

export type PrivacyPolicyTemplateProps = {
  content: string
}

export function PrivacyPolicyTemplate({ content }: PrivacyPolicyTemplateProps) {
  return <CmsContent dangerouslySetInnerHTML={{ __html: content }} />
}
