import { useQueryProducs } from '@/graphql/queries'
import { useLocalStorage, useDebounce } from '@/hooks'
import {
  CartItemModel,
  CartProductModel,
  CartTotalModel,
  ShippingOptionModel
} from '@/models'
import { loadShippingOptionsByZipCode } from '@/services'
import { cartProductsMapper } from '@/utils/mappers'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

type IsLoadingItems = 'products' | 'shipping'

type CartContextData = {
  cartItems: CartItemModel[] | undefined
  shippingOptions: ShippingOptionModel[]
  products: CartProductModel[]
  totals: CartTotalModel
  addProductToCart: (item: CartItemModel) => void
  removeProductFromCart: (id: string) => void
  resetCart: () => void
  isInCart: (id: string) => CartItemModel | undefined
  loadShippingOptions: (zipCode: string) => Promise<void>
  isLoading: Record<IsLoadingItems, boolean>
}

type CartProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItemModel[]>(
    'ALM_CART',
    []
  )
  const debouncedCartItems = useDebounce<CartItemModel[]>(cartItems, 500)
  const [shippingOptions, setShippingOptions] = useState<ShippingOptionModel[]>(
    []
  )
  const [isLoading, setIsLoading] = useState({
    products: false,
    shipping: false
  })
  const [totals, setTotals] = useState<CartTotalModel>({
    products: 0,
    shipping: 0,
    total: 0
  })
  const { data, loading: loadingProducts } = useQueryProducs({
    skip: !debouncedCartItems?.length,
    variables: {
      where: {
        id: debouncedCartItems?.map((item) => item.id)
      }
    }
  })

  const products = useMemo(
    () =>
      debouncedCartItems
        ? cartProductsMapper(data?.livros, debouncedCartItems)
        : [],
    [debouncedCartItems, data?.livros]
  )

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
        return [
          ...(state ? state.filter((cartItem) => cartItem.id !== item.id) : []),
          item
        ]
      })
    },
    [setCartItems]
  )

  const resetCart = useCallback(() => {
    setCartItems([])
  }, [setCartItems])

  const isInCart = useCallback(
    (id: CartItemModel['id']) => {
      return cartItems?.find((item) => item.id === id)
    },
    [cartItems]
  )

  const updateIsLoading = useCallback(
    (key: keyof typeof isLoading, value: boolean) => {
      setIsLoading((state) => ({ ...state, [key]: value }))
    },
    []
  )

  const loadShippingOptions = useCallback(
    async (zipCode: string) => {
      updateIsLoading('shipping', true)
      const options = await loadShippingOptionsByZipCode({
        zipCode,
        cart: cartItems
      })

      updateIsLoading('shipping', false)
      setShippingOptions(options)
    },
    [cartItems, updateIsLoading]
  )

  useEffect(() => {
    updateIsLoading('products', loadingProducts)
  }, [updateIsLoading, loadingProducts])

  useEffect(() => {
    const productsTotal = products
      .map((product) => product.price * product.quantity)
      .reduce((total, curr) => curr + total, 0)
    const shippingTotal = 0

    setTotals({
      products: productsTotal,
      shipping: shippingTotal,
      total: productsTotal + shippingTotal
    })
  }, [products])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        products,
        totals,
        addProductToCart,
        removeProductFromCart,
        loadShippingOptions,
        shippingOptions,
        isInCart,
        resetCart,
        isLoading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
