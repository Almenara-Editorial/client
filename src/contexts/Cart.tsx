import { useQueryProducs } from '@/graphql/queries'
import { CartItemModel, CartProductModel, CartTotalModel } from '@/models'
import { cartProductsMapper } from '@/utils/mappers'
import { createContext, useCallback, useContext, useState } from 'react'

type CartContextData = {
  cartItems: CartItemModel[]
  products: CartProductModel[]
  totals: CartTotalModel
  addProductToCart: (item: CartItemModel) => void
  removeProductFromCart: (id: string) => void
  isInCart: (id: string) => CartItemModel | undefined
  loading: boolean
}

type CartProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemModel[]>([])
  const { data, loading } = useQueryProducs({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems.map((item) => item.id)
      }
    }
  })
  const products = cartProductsMapper(data?.livros, cartItems)
  const totals: CartTotalModel = {
    products: products.map((product) => product.price * product.quantity).reduce((total, curr) => curr + total, 0)
  }

  const removeProductFromCart = useCallback((id: string) => {
    setCartItems((state) => [...state.filter((cartItem) => cartItem.id !== id)])
  }, [])

  const addProductToCart = useCallback(
    (item: CartItemModel) => {
      if (item.quantity < 1) return removeProductFromCart(item.id)

      setCartItems((state) => [...state.filter((cartItem) => cartItem.id !== item.id), item])
    },
    [removeProductFromCart]
  )

  const isInCart = useCallback(
    (id: CartItemModel['id']) => {
      return cartItems.find((item) => item.id === id)
    },
    [cartItems]
  )

  return (
    <CartContext.Provider value={{ cartItems, products, totals, addProductToCart, removeProductFromCart, isInCart, loading }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
