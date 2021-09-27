import axios from 'axios'

type BrasilApiCepData = {
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
  service: string
}

export async function getAddressByCep(cep: string) {
  const cepOnlyNumbers = cep.replace(/\D/g, '') // 123456

  const { data } = await axios.get<BrasilApiCepData>(
    `https://brasilapi.com.br/api/cep/v1/${cepOnlyNumbers}`
  )

  return data
}
