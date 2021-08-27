import { CartItemModel, CartProductModel, CartTotalModel } from '@/models'
import { createContext, useContext, useState } from 'react'

type CartContextData = {
  cartItems: CartItemModel[]
  products: CartProductModel[]
  totals: CartTotalModel
}

type CartProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemModel[]>([])
  const products: CartProductModel[] = []
  const totals: CartTotalModel = { products: 0 }

  return <CartContext.Provider value={{ cartItems, products, totals }}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
