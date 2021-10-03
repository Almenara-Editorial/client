import { createContext, useContext } from 'react'

type PaymentContextData = {
  foo: string
}

type PaymentProviderProps = {
  children: React.ReactNode
}

export const PaymentContext = createContext({} as PaymentContextData)

export function PaymentProvider({ children }: PaymentProviderProps) {
  const foo = ''

  return (
    <PaymentContext.Provider value={{ foo }}>
      {children}
    </PaymentContext.Provider>
  )
}

export function usePayment() {
  return useContext(PaymentContext)
}
