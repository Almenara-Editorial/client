import { GetStaticProps } from 'next'

import { QUERY_PRIVACY_POLICY } from '@/graphql/queries'
import { QueryPrivacyPolicy } from '@/graphql/generated/QueryPrivacyPolicy'

import {
  PrivacyPolicyTemplate,
  PrivacyPolicyTemplateProps
} from '@/components/templates'
import { commonDataMapper, initializeApollo } from '@/utils'

type PrivacyPolicyProps = PrivacyPolicyTemplateProps

export default function PrivacyPolicy({ content }: PrivacyPolicyProps) {
  return <PrivacyPolicyTemplate content={content} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryPrivacyPolicy>({
    query: QUERY_PRIVACY_POLICY
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      content: data.privacyPolicy?.content,
      ...commonDataMapper({ header: data.cabecalho, footer: data.rodape })
    }
  }
}
