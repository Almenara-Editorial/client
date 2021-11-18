import { useRef, useEffect } from 'react'
import { Container } from './styles'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paypal: any
  }
}

export const PayPalButton = () => {
  const paypalRef = useRef(null)

  useEffect(() => {
    window.paypal
      .Buttons({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        createOrder: (data: any, actions: any, err: any) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Test',
                amount: {
                  currency_code: 'BRL',
                  value: 600
                }
              }
            ]
          })
        }
      })
      .render(paypalRef.current)
  }, [])

  return (
    <Container>
      <div ref={paypalRef}></div>
    </Container>
  )
}
