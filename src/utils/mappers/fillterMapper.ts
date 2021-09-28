import { QueryBooks_categorias } from '@/graphql/generated/QueryBooks'

type FilterMapperParams = {
  categories: QueryBooks_categorias[]
}

export function filterMapper({ categories }: FilterMapperParams) {
  return {
    categories: {
      title: 'Categorias',
      slug: 'categorias',
      items: categories?.map((category) => ({
        name: category.name,
        slug: category.slug
      }))
    }
  }
}
