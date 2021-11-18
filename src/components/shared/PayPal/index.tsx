import Script from 'next/script'

export function PayPal() {
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=BRL&disable-funding=credit,card`}
      />
    </>
  )
}
