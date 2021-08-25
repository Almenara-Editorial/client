type ProductModel = {
  name: string
  slug: string
  price: number
  stock: number
  imageSrc: string
}

export type ProductCardModel = Pick<ProductModel, 'name' | 'price' | 'slug'> & {
  thumbnailSrc: string
}

export type SingleProductModel = ProductModel & {
  installments?: string
}

export type CartProductCardModel = ProductCardModel
