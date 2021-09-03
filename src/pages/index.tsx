import { HomeTemplate, HomeTemplateProps } from '@/components/templates'
import { QueryHome } from '@/graphql/generated/QueryHome'
import { QUERY_HOME } from '@/graphql/queries'
import { initializeApollo } from '@/utils'
import { productsGroupsMapper, bannersMapper, footerMapper } from '@/utils/mappers'

type HomeProps = HomeTemplateProps

export default function Home({ slides, productsGroups }: HomeProps) {
  return <HomeTemplate slides={slides} productsGroups={productsGroups} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })

  return {
    revalidate: 60,
    props: {
      slides: bannersMapper(data.home?.banner),
      productsGroups: productsGroupsMapper(data.home?.productGroup),
      initialApolloState: apolloClient.cache.extract(),
      footer: data.rodape ? footerMapper(data.rodape) : null
    }
  }
}
