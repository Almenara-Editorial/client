import { api } from './api'
import { withAuthHeader } from '@/utils'

export type UpdateUserValues = {
  products: number[]
}

export type UpdateUserReturn = {
  products: number[]
}

export async function updateWishlist(
  body: UpdateUserValues,
  token: string
): Promise<UpdateUserReturn> {
  const { data } = await api.put<UpdateUserReturn>(
    '/user',
    body,
    withAuthHeader(token)
  )

  return data
}
