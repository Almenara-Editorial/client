import { CartProductModel } from '@/models'
import { api } from './api'

type LoadShippingOptionsArgs = {
  cart: Pick<CartProductModel, 'id' | 'quantity'>[]
  zipCode: string
}

type ShippingApiData = {
  services: [
    {
      carrier: string
      deliveryTime: number
      service: string
      price: number
    }
  ]
}

export async function loadShippingOptionsByZipCode({
  cart,
  zipCode
}: LoadShippingOptionsArgs) {
  const { data } = await api.post<ShippingApiData>('/orders/shipping', {
    cart,
    zipCode
  })

  return data.services.map((service) => ({
    id: service.carrier,
    name: `${service.carrier} (${service.service})`,
    deliveryTime: service.deliveryTime,
    price: service.price
  }))
}
