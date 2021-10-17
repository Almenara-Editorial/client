import { ProductModel, ProductCardModel } from '.'

export type CartItemModel = Pick<ProductModel, 'id'> & {
  quantity: number
}

export type CartProductModel = Pick<
  ProductModel,
  'id' | 'name' | 'price' | 'slug' | 'imageSrc' | 'promoPrice' | 'stock'
> & {
  quantity: number
}

export type CartProductCardModel = ProductCardModel

export type CartTotalModel = {
  products: number
  shipping: number
  total: number
}
