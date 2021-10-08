import { CartItemModel, ShippingOptionModel } from '@/models'
import axios from 'axios'
import { api } from './api'

type BrasilApiCepData = {
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
  service: string
}

export async function getAddressByCep(cep: string) {
  const cepOnlyNumbers = cep.replace(/\D/g, '')

  const { data } = await axios.get<BrasilApiCepData>(
    `https://brasilapi.com.br/api/cep/v1/${cepOnlyNumbers}`
  )

  return data
}
