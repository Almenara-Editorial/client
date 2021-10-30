import { useApolloClient, useMutation } from '@apollo/client'
import { useSession } from 'next-auth/client'
import { useMemo } from 'react'
import { useState } from 'react'
import { createContext, useContext, useEffect } from 'react'
import { productsMapper } from '@/utils/mappers'
import { ProductCardModel } from '@/models'
import {
  QueryWishlist,
  QueryWishlist_wishlists_books
} from '@/graphql/generated/QueryWishlist'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from '@/graphql/mutations/wishlist'
import { QUERY_WISHLIST, useQueryWishlist } from '@/graphql/queries/wishlist'
import { BOOK_FRAGMENT } from '@/graphql/fragments'

export type WishlistContextData = {
  items: ProductCardModel[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()
  const [wishlistId, setWishlistId] = useState<string | null>()
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_books[]
  >([])
  const apolloClient = useApolloClient()

  const [createList, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.createWishlist?.wishlist?.books || [])
        setWishlistId(data?.createWishlist?.wishlist?.id)
      }
    }
  )

  const [updateList, { loading: loadingUpdate }] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.updateWishlist?.wishlist?.books || [])
      }
    }
  )

  const options = {
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  }

  const { data, loading: loadingQuery } = useQueryWishlist(options)

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.books || [])
    setWishlistId(data?.wishlists[0]?.id)
  }, [data])

  const wishlistIds = useMemo(
    () => wishlistItems.map((game) => game.id),
    [wishlistItems]
  )

  const isInWishlist = (id: string) =>
    wishlistItems.some((game) => game.id === id)

  const optimisticGameResponse = (id: string) => {
    const game = apolloClient.readFragment({
      id: `Book:${id}`,
      fragment: BOOK_FRAGMENT
    })

    return (
      game ?? {
        __typename: 'Book',
        id,
        name: '',
        slug: '',
        price: ''
      }
    )
  }

  const addToWishlist = (id: string) => {
    // se não existir wishlist - cria
    if (!wishlistId) {
      return createList({
        variables: { input: { data: { books: [...wishlistItems, id] } } },
        optimisticResponse: {
          createWishlist: {
            wishlist: {
              id: String(Math.round(Math.random() * -1000000)),
              books: [optimisticGameResponse(id)],
              __typename: 'Wishlist'
            },
            __typename: 'createWishlistPayload'
          }
        },
        update: (cache, payload) => {
          const newWishlist = payload.data.createWishlist.wishlist

          const existingWishlist = cache.readQuery<QueryWishlist>({
            query: QUERY_WISHLIST,
            ...options
          })

          if (existingWishlist && newWishlist) {
            cache.writeQuery({
              query: QUERY_WISHLIST,
              data: {
                wishlists: [newWishlist]
              },
              ...options
            })
          }
        }
      })
    }

    // senão atualiza a wishlist existente
    return updateList({
      variables: {
        input: {
          data: { books: [...wishlistIds, id] }
        }
      },
      optimisticResponse: {
        updateWishlist: {
          wishlist: {
            id: wishlistId,
            books: [...wishlistItems, optimisticGameResponse(id)],
            __typename: 'Wishlist'
          },
          __typename: 'updateWishlistPayload'
        }
      }
    })
  }

  const removeFromWishlist = (id: string) => {
    return updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: { books: wishlistIds.filter((gameId: string) => gameId !== id) }
        }
      },
      optimisticResponse: {
        updateWishlist: {
          wishlist: {
            id: wishlistId,
            books: wishlistItems.filter(({ id: gameId }) => gameId !== id),
            __typename: 'Wishlist'
          },
          __typename: 'updateWishlistPayload'
        }
      }
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        items: productsMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: loadingQuery || loadingCreate || loadingUpdate
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
