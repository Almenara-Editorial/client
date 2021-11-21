import { HomeTemplate, HomeTemplateProps } from '@/components/templates'
import { QueryHome } from '@/graphql/generated/QueryHome'
import { QUERY_HOME } from '@/graphql/queries'
import { loadCommonMenus } from '@/services'
import { initializeApollo } from '@/utils'
import { productsGroupsMapper, bannersMapper } from '@/utils/mappers'

type HomeProps = HomeTemplateProps

export default function Home({ slides, productsGroups }: HomeProps) {
  return <HomeTemplate slides={slides} productsGroups={productsGroups} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })
  const commonMenus = await loadCommonMenus()

  return {
    revalidate: 10,
    props: {
      slides: bannersMapper(data.home?.banner),
      productsGroups: productsGroupsMapper(data.home?.productGroup),
      initialApolloState: apolloClient.cache.extract(),
      ...commonMenus
    }
  }
}
