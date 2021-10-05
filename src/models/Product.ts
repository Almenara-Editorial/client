export type ProductModel = {
  id: string
  name: string
  slug: string
  promoPrice?: number | null
  price: number
  stock: number
  imageSrc: (string | undefined)[]
  description: string
  particulars: string
}

type SeeMoreModel = {
  name: string
  url: string
}

export type ProductsCardsGroupModel = {
  id: string
  title?: string
  products: ProductCardModel[]
  seeMore?: SeeMoreModel
}

export type ProductCardModel = Pick<
  ProductModel,
  'id' | 'name' | 'price' | 'promoPrice' | 'slug' | 'imageSrc'
>
export type SingleProductModel = ProductModel & {
  installments?: string
}
