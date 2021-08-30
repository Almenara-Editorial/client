/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { QueryBooks_livros } from '@/graphql/generated/QueryBooks'
import { QueryHome_home_productGroup } from '@/graphql/generated/QueryHome'
import { ProductModel, ProductsCardsGroupModel } from '@/models'
import { getImageUrl } from '../get-image-url'

export function productsMapper(products: QueryBooks_livros[] | null | undefined): ProductModel[] {
  if (!products) return []

  return products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    slug: product.slug,
    imageSrc: getImageUrl(product.image?.formats.small?.url || product.image?.url),
    stock: 1000
  }))
}

export function productsGroupsMapper(productsGroups: (QueryHome_home_productGroup | null)[] | null | undefined): ProductsCardsGroupModel[] {
  if (!productsGroups?.length) return []

  return productsGroups.map((group) => ({
    id: group!.id,
    title: group!.title,
    products: group!.livros.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      slug: product.slug,
      imageSrc: getImageUrl(product.image?.formats.small?.url || product.image?.url)
    })),
    ...(group?.link && {
      seeMore: {
        name: group!.link?.name || '',
        url: group!.link?.url || '#'
      }
    })
  }))
}
