import { api } from './api'
import { withAuthHeader } from '@/utils'

export type UpdateUserValues = {
  fullName: string
  documentNumber: string
}

export type UpdateUserReturn = {
  fullName: string
  documentNumber: string
}

export async function updateUser(
  body: UpdateUserValues,
  token: string
): Promise<UpdateUserReturn> {
  const { data } = await api.put<UpdateUserReturn>(
    '/users',
    body,
    withAuthHeader(token)
  )

  return data
}
