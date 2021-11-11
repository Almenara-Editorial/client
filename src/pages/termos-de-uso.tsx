import { GetStaticProps } from 'next'
import { QUERY_TERMS_OF_USE } from '@/graphql/queries'
import { QueryTermsOfUse } from '@/graphql/generated/QueryTermsOfUse'
import {
  TermsOfUseTemplate,
  TermsOfUseTemplateProps
} from '@/components/templates'
import { commonDataMapper, initializeApollo } from '@/utils'

type TermsOfUseProps = TermsOfUseTemplateProps

export default function TermsOfUse({ content }: TermsOfUseProps) {
  return <TermsOfUseTemplate content={content} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryTermsOfUse>({
    query: QUERY_TERMS_OF_USE
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      content: data.termsOfUse?.content,
      ...commonDataMapper({ header: data.cabecalho, footer: data.rodape })
    }
  }
}
