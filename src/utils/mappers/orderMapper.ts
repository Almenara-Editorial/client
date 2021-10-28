import { format } from 'date-fns'
import { QueryOrders_orders } from '@/graphql/generated/QueryOrders'
import { OrderModel } from '@/models/order'
import { formatToCurrency } from '../format-to-currency'
import { getImageUrl } from '../get-image-url'
import { OrderProductModel } from '@/models'

type ApiUploadFile = {
  id: number
  created_at: Date
  updated_at: Date
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: JSON
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  provider_metadata: JSON
}

type ApiProductDimensions = {
  id: number
  boxWidth: number
  boxHeight: number
  boxLength: number
  boxWeight: number
}

type ApiCategorias = {
  id: number
  created_at: Date
  updated_at: Date
  name: string
  slug: string
  livros: ApiLivro[]
}

type ApiAuthor = {
  id: number
  created_at: Date
  updated_at: Date
  name: string
  book: ApiLivro
}

type ApiLivro = {
  id: number
  created_at: Date
  updated_at: Date
  name: string
  slug: string
  description: string
  particulars: string
  price: number
  stock: number
  dimensions: ApiProductDimensions
  active: boolean
  promoPrice: number
  sku: string
  gtin: string
  ncm: string
  seoDescription: string
  image: ApiUploadFile[]
  categorias: ApiCategorias[]
  authors: ApiAuthor[]
}

type ApiOrderProduct = {
  id: number
  book: ApiLivro
  quantity: number
}

type ApiOrderShippingAddress = {
  id: number
  street: string
  zipCode: string
  city: string
  state: string
  neighborhood: string
  info: string
  carrier: string
  price: number
  service: string
  estimatedDelivery: string
}

type ApiUsersPermissionsUser = {
  id: number
  created_at: Date
  updated_at: Date
  username: string
  fullName: string
  email: string
  provider: string
}

export type ApiOrder = {
  id: number
  created_at: Date
  updated_at: Date
  user: ApiUsersPermissionsUser
  paymentBrand: string
  cardLastFour: string
  total: string
  status: { name: string }
  comments: string
  books: ApiOrderProduct[]
  totalInCents: number
  shipping: ApiOrderShippingAddress
  payment: {
    id: string
    status: string
    documentUrl: string
    lastFour: string
  }
}

export function orderMapper(order: ApiOrder): OrderModel {
  return {
    books:
      order?.books?.map((product) => ({
        id: product.book.id.toString(),
        name: product.book.name,
        price: product.book.promoPrice || product.book.price,
        imageSrc: product.book.image.map((image) => getImageUrl(image.url)),
        quantity: product.quantity,
        slug: product.book.slug,
        promoPrice: product.book.promoPrice
      })) || [],
    createdAt: format(new Date(order.created_at), 'dd/MM/yyyy'),
    status: order.status.name,
    id: order.id.toString(),
    payment: order.payment,
    shipping: {
      price: order.shipping.price,
      estimatedDelivery: order.shipping.estimatedDelivery
    },
    total: order.total,
    user: order.user,
    paymentBrand: order.paymentBrand,
    cardLastFour: order.cardLastFour,
    paymentUrl: order.payment.documentUrl
  }
}

export function ordersMapper(
  orders: QueryOrders_orders[] | null | undefined
): Pick<OrderModel, 'id' | 'createdAt' | 'total' | 'status'>[] {
  if (!orders) return []

  return orders?.map((order) => ({
    id: order.id.toString(),
    createdAt: format(new Date(order.created_at), 'dd/MM/yyyy'),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    books: order.books!.map(
      (book) =>
        ({
          id: book?.book?.id,
          name: book?.book?.name,
          imageSrc: book?.book?.image.map((image) => getImageUrl(image.src)),
          price: book?.price,
          slug: book?.book?.slug,
          stock: book?.book?.stock,
          quantity: book?.quantity
        } as OrderProductModel)
    ),
    paymentUrl: order?.payment?.documentUrl,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    total: formatToCurrency(Number(order?.payment?.total)),
    status: order.status?.name || ''
  }))
}
