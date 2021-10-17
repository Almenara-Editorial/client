import { api } from './api'
import { withAuthHeader } from '@/utils'

export type UpdateUserValues = {
  fullName: string
}

export type UpdateUserReturn = {
  fullName: string
}

export async function updateUser(
  body: UpdateUserValues,
  token: string
): Promise<UpdateUserReturn> {
  const { data } = await api.put<UpdateUserReturn>(
    '/users-permissions/user',
    body,
    withAuthHeader(token)
  )

  return data
}
