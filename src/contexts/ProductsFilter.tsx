import { parseQueryToFilter } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import { createContext, useContext, useEffect, useState } from 'react'

type FilterValues = Record<string, string[]> | null

type ProductsFilterContextData = {
  values: FilterValues
  addToFilter: (key: string, value: string) => void
  removeFromFilter: (key: string, value: string) => void
  cleanFilter: () => void
}

type ProductsFilterProviderProps = {
  children: React.ReactNode
}

export const ProductsFilterContext = createContext(
  {} as ProductsFilterContextData
)

export function ProductsFilterProvider({
  children
}: ProductsFilterProviderProps) {
  const router = useRouter()
  const [values, setValues] = useState<FilterValues>(
    parseQueryToFilter(router.query)
  )

  function addToFilter(key: string, value: string) {
    setValues((state) => {
      const values = state
        ? state[key]?.filter((stateValue) => stateValue !== value) || []
        : []

      values.push(value)

      return {
        ...state,
        [key]: values
      }
    })
  }

  function removeFromFilter(key: string, value: string) {
    setValues((state) => {
      const otherValues = state
        ? state[key]?.filter((stateValue) => stateValue !== value)
        : []

      return {
        ...state,
        [key]: otherValues
      }
    })
  }

  function cleanFilter() {
    setValues(null)
  }

  useEffect(() => {
    router.replace({ pathname: '/produtos', query: values })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  return (
    <ProductsFilterContext.Provider
      value={{ values, addToFilter, removeFromFilter, cleanFilter }}
    >
      {children}
    </ProductsFilterContext.Provider>
  )
}

export function useProductsFilter() {
  return useContext(ProductsFilterContext)
}
