import { useMemo } from 'react'

export function useMercadoPago() {
  const mercadopago = useMemo(() => {
    return window.mp
  }, [])

  return { mercadopago }
}
