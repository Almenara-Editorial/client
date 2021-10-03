import { CartProductModel, CheckoutValues } from '@/models'
import { api } from './api'
import { withAuthHeader } from '@/utils'

type CreateOrderValues = {
  cart: CartProductModel[]
  order: CheckoutValues
  token: string
}

export async function createOrder({ order, token, cart }: CreateOrderValues) {
  const { data } = await api.post(
    '/orders',
    {
      cart,
      payment: {
        id: order.payment?.id,
        token: order.payment?.token,
        issuerId: order.payment?.issuerId,
        paymentTypeId: order.payment?.paymentTypeId,
        installments: order.payment?.installments,
        payer: {
          email: order.payment?.cardHolderEmail || order.payment?.payer.email,
          firstName: order.payment?.payer?.firstName || '',
          lastName: order.payment?.payer?.lastName || '',
          identification: {
            type:
              order.payment?.identificationType ||
              order.payment?.payer?.identification.type,
            number:
              order.payment?.identificationNumber ||
              order.payment?.payer?.identification.number
          },
          address: {
            zipCode: order.shipping.cep,
            street: order.shipping.street,
            number: order.shipping.number,
            neighborhood: order.shipping.neighborhood,
            city: order.shipping.cep,
            state: order.shipping.cep
          }
        }
      }
    },
    withAuthHeader(token)
  )

  return data
}
