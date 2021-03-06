/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  QueryBookBySlug_livros,
  QueryBookBySlug_livros_disccounts
} from '@/graphql/generated/QueryBookBySlug'
import { QueryBooks_livros } from '@/graphql/generated/QueryBooks'
import { QueryHome_home_productGroup } from '@/graphql/generated/QueryHome'
import {
  CartItemModel,
  CartProductModel,
  DisccountModel,
  ProductModel,
  ProductsCardsGroupModel
} from '@/models'
import { getImageUrl } from '../get-image-url'

function compareDisccounts(
  a: QueryBookBySlug_livros_disccounts,
  b: QueryBookBySlug_livros_disccounts
) {
  if (!a?.minQuantity || !b?.minQuantity) return 0

  if (a.minQuantity > b.minQuantity) {
    return -1
  }
  if (a.minQuantity < b.minQuantity) {
    return 1
  }
  return 0
}

function sortDisccounts(objs: QueryBookBySlug_livros_disccounts[]) {
  return [...objs].sort(compareDisccounts)
}

function disccountMapper(
  disccounts: QueryBookBySlug_livros_disccounts[]
): DisccountModel[] {
  if (!disccounts) return []

  return sortDisccounts(disccounts).map((disccount) => ({
    minQuantity: disccount.minQuantity!,
    percentage: disccount.percentage! / 100
  }))
}

export function productMapper(products: QueryBookBySlug_livros[]) {
  const product = products[0]

  return {
    id: product.id,
    name: product.name,
    price: product.price,
    authors: product.authors?.map((author) => author?.name),
    promoPrice: product.promoPrice,
    slug: product.slug,
    imageSrc: product.image?.map((image) => getImageUrl(image?.src)),
    stock: product.stock,
    description: product.description,
    particulars: product.particulars,
    disccounts: disccountMapper(product.disccounts)
  }
}

export function productsMapper(
  products: QueryBooks_livros[] | null | undefined
): Omit<ProductModel, 'particulars' | 'description'>[] {
  if (!products) return []

  return products?.map((product) => ({
    id: product.id,
    name: product.name,
    authors: product.authors?.map((author) => author?.name),
    price: product.price,
    promoPrice: product.promoPrice,
    slug: product.slug,
    imageSrc: product.image?.map((image) => getImageUrl(image?.src)),
    stock: product.stock,
    disccounts: disccountMapper(product.disccounts)
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
    promoPrice: product.promoPrice,
    slug: product.slug,
    imageSrc: product.image?.map((image) => getImageUrl(image?.src)),
    stock: product.stock,
    quantity: cartItems.find((item) => item.id === product.id)!.quantity,
    disccounts: disccountMapper(product.disccounts)
  }))
}

export function productsGroupsMapper(
  productsGroups: (QueryHome_home_productGroup | null)[] | null | undefined
): ProductsCardsGroupModel[] {
  if (!productsGroups?.length || productsGroups.length === 0) return []

  return productsGroups?.map((group) => ({
    id: group!.id,
    title: group!.title,
    products: group!.livros?.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      promoPrice: product.promoPrice,
      slug: product.slug,
      imageSrc: product.image?.map((image) => getImageUrl(image?.src)) || []
    })),
    ...(group?.link && {
      seeMore: {
        name: group!.link?.name || '',
        url: group!.link?.url || '#'
      }
    })
  }))
}
