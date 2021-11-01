export type DisccountModel = {
  minQuantity: number
  percentage: number
}

export type ProductModel = {
  id: string
  name: string
  slug: string
  authors: (string | null)[]
  promoPrice?: number | null
  price: number
  stock: number
  imageSrc: (string | undefined)[]
  description: string
  particulars: string
  disccounts: DisccountModel[] | []
}

export type OrderProductModel = Pick<
  ProductModel,
  'id' | 'name' | 'price' | 'imageSrc' | 'slug' | 'promoPrice'
> & {
  quantity: number
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
  'id' | 'name' | 'price' | 'promoPrice' | 'slug' | 'imageSrc' | 'stock'
>
export type SingleProductModel = ProductModel & {
  installments?: string
}
