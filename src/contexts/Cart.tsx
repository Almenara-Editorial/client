import { useQueryProducs } from '@/graphql/queries'
import { CartItemModel, CartProductModel, CartTotalModel } from '@/models'
import { cartProductsMapper } from '@/utils/mappers'
import { createContext, useCallback, useContext, useState } from 'react'
import { useLocalStorage } from 'react-use'

type CartContextData = {
  cartItems: CartItemModel[] | undefined
  products: CartProductModel[]
  totals: CartTotalModel
  addProductToCart: (item: CartItemModel) => void
  removeProductFromCart: (id: string) => void
  resetCart: () => void
  isInCart: (id: string) => CartItemModel | undefined
  loading: boolean
}

type CartProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems, resetCart] = useState<CartItemModel[]>([])
  const { data, loading } = useQueryProducs({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems?.map((item) => item.id)
      }
    }
  })
  const products = cartItems ? cartProductsMapper(data?.livros, cartItems) : []
  const productsTotal = products
    .map((product) => product.price * product.quantity)
    .reduce((total, curr) => curr + total, 0)
  const shippingTotal = 10
  const totals: CartTotalModel = {
    products: productsTotal,
    shipping: shippingTotal,
    total: productsTotal + shippingTotal
  }

  const removeProductFromCart = useCallback(
    (id: string) => {
      setCartItems(
        (state) => state?.filter((cartItem) => cartItem.id !== id) || []
      )
    },
    [setCartItems]
  )

  const addProductToCart = useCallback(
    (item: CartItemModel) => {
      setCartItems((state) => {
        console.log(state ? state.push(item) : [item])

        return [
          ...(state ? state.filter((cartItem) => cartItem.id !== item.id) : []),
          item
        ]
      })
    },
    [setCartItems]
  )

  const isInCart = useCallback(
    (id: CartItemModel['id']) => {
      return cartItems?.find((item) => item.id === id)
    },
    [cartItems]
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        products,
        totals,
        addProductToCart,
        removeProductFromCart,
        isInCart,
        resetCart,
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
