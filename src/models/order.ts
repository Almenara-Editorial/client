import { ProductModel } from './product'

export interface User {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked?: boolean
  role: number
  created_at: Date
  updated_at: Date
  privacyPolicy?: string
  termsOfUse?: string
}

export interface Dimensions {
  id: number
  boxWidth: number
  boxHeight: number
  boxLength: number
  boxWeight: number
}

export interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: string
  size: number
  width: number
  height: number
}

export interface Formats {
  thumbnail: Thumbnail
}

export interface Image {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: string
  provider: string
  provider_metadata?: string
  created_at: Date
  updated_at: Date
}

export interface Livro {
  id: number
  name: string
  slug: string
  description: string
  particulars: string
  price: number
  created_at: Date
  updated_at: Date
  autores?: string
  autor?: string
  stock: number
  active: boolean
  promoPrice?: number
  sku?: string
  gtin?: string
  ncm?: string
  seoDescription?: string
  dimensions: Dimensions
  image: Image[]
}

export type UserModel = {
  id: number
  username: string
  email: string
}

export type OrderModel = {
  id: string
  user: UserModel
  createdAt: string
  paymentBrand?: string
  cardLastFour?: string
  status: string
  total: string
  books: (Pick<
    ProductModel,
    'id' | 'name' | 'price' | 'imageSrc' | 'promoPrice' | 'slug'
  > & {
    quantity: number
  })[]
  payment: {
    id: string
    status: string
    documentUrl: string
    lastFour: string
  }
  shipping: {
    estimatedDelivery: string
    price: number
  }
}
