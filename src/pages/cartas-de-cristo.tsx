import { GetServerSideProps } from 'next'

import { QUERY_PRIVACY_POLICY } from '@/graphql/queries'
import { QueryPrivacyPolicy } from '@/graphql/generated/QueryPrivacyPolicy'

import {
  CartasDeCristoTemplate,
  CartasDeCristoTemplateProps
} from '@/components/templates'
import { commonDataMapper, initializeApollo } from '@/utils'

type CartasDeCristoProps = CartasDeCristoTemplateProps

export default function CartasDeCristo(props: CartasDeCristoProps) {
  return <CartasDeCristoTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
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
