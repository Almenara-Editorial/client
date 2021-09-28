import { api } from './api'

export type PaymentMethods = {
  availableMethods: {
    id: string
    name: string
    thumbnail: string
    minAmmount: number
    maxAmmount: number
    paymentTypeId: string
  }[]
  creditCards: {
    thumbnail: string
  }[]
}

export async function loadPaymentMethods() {
  const { data } = await api.get<PaymentMethods>('/orders/payment-options')

  return data
}
