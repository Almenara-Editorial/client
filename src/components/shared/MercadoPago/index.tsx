import Script from 'next/script'

export function MercadoPago() {
  const MERCADO_PAGO_KEY = process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://sdk.mercadopago.com/js/v2`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          try {
            window.mp = new MercadoPago("${MERCADO_PAGO_KEY}", {
              locale: 'pt-BR',
              advancedFraudPrevention: false
            })
          } catch (error){
            console.log(error)
          }`
        }}
      />
    </>
  )
}
