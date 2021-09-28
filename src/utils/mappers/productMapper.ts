/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { QueryBookBySlug_livros } from '@/graphql/generated/QueryBookBySlug'
import { QueryBooks_livros } from '@/graphql/generated/QueryBooks'
import { QueryHome_home_productGroup } from '@/graphql/generated/QueryHome'
import {
  CartItemModel,
  CartProductModel,
  ProductModel,
  ProductsCardsGroupModel
} from '@/models'
import { getImageUrl } from '../get-image-url'

export function productMapper(products: QueryBookBySlug_livros[]) {
  const product = products[0]

  return {
    id: product.id,
    name: product.name,
    price: product.price,
    slug: product.slug,
    imageSrc: getImageUrl(product.image?.src),
    stock: product.stock,
    description: product.description,
    particulars: product.particulars
  }
}

export function productsMapper(
  products: QueryBooks_livros[] | null | undefined
): Omit<ProductModel, 'particulars' | 'description'>[] {
  if (!products) return []

  return products?.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    slug: product.slug,
    imageSrc:
      getImageUrl(product.image?.formats.small?.url || product.image?.src) ||
      '#',
    stock: 1000
  }))
}

export function cartProductsMapper(
  products: QueryBooks_livros[] | null | undefined,
  cartItems: CartItemModel[]
): CartProductModel[] {
  if (!products) return []

  return products?.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    slug: product.slug,
    imageSrc:
      getImageUrl(product.image?.formats.small?.url || product.image?.src) ||
      '#',
    stock: 1000,
    quantity: cartItems.find((item) => item.id === product.id)!.quantity
  }))
}

export function productsGroupsMapper(
  productsGroups: (QueryHome_home_productGroup | null)[] | null | undefined
): ProductsCardsGroupModel[] {
  if (!productsGroups?.length) return []

  return productsGroups?.map((group) => ({
    id: group!.id,
    title: group!.title,
    products: group!.livros?.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      slug: product.slug,
      imageSrc:
        getImageUrl(product.image?.formats.small?.url || product.image?.src) ||
        '#'
    })),
    ...(group?.link && {
      seeMore: {
        name: group!.link?.name || '',
        url: group!.link?.url || '#'
      }
    })
  }))
}
