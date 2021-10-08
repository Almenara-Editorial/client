import { CartProductModel, ShippingOptionModel } from '@/models'
import { api } from './api'

type LoadShippingOptionsArgs = {
  cart: Pick<CartProductModel, 'id' | 'quantity'>[]
  zipCode: string
}

type ShippingApiData = {
  id: string
  hashId: string
  carrier: string
  time: string
  service: string
  price: number
}

export async function loadShippingOptionsByZipCode({
  cart,
  zipCode
}: LoadShippingOptionsArgs) {
  const zipCodeOnlyNumbers = zipCode.replace(/\D/g, '')

  const { data } = await api.post<ShippingApiData[]>(`/shippings/calc`, {
    zipCode: zipCodeOnlyNumbers,
    cart
  })

  return data.map((item) => ({
    id: item.hashId,
    name: item.carrier,
    price: item.price,
    time: item.time
  })) as ShippingOptionModel[]
}
