import { TextField } from '@/components/form'
import { Button } from '@/components/shared'
import { useCart } from '@/contexts'
import Script from 'next/script'
import { FormEvent, useEffect, useState } from 'react'
import { Container } from './styles'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mp: any
  }
}

export function CreditCardForm() {
  const [mounted, setMounted] = useState(false)
  const { totals } = useCart()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Container>
      <form id="form-checkout">
        <TextField
          type="text"
          name="cardNumber"
          id="form-checkout__cardNumber"
        />
        <TextField
          type="text"
          name="cardExpirationMonth"
          id="form-checkout__cardExpirationMonth"
        />
        <TextField
          type="text"
          name="cardExpirationYear"
          id="form-checkout__cardExpirationYear"
        />
        <TextField
          type="text"
          name="cardholderName"
          id="form-checkout__cardholderName"
        />
        <TextField
          type="text"
          name="cardholderEmail"
          id="form-checkout__cardholderEmail"
        />
        <TextField
          type="text"
          name="securityCode"
          id="form-checkout__securityCode"
        />
        <select name="issuer" id="form-checkout__issuer" hidden></select>
        <select
          name="identificationType"
          id="form-checkout__identificationType"
        ></select>
        <TextField
          type="text"
          name="identificationNumber"
          id="form-checkout__identificationNumber"
        />
        <select name="installments" id="form-checkout__installments"></select>
        <Button type="submit" id="form-checkout__submit">
          Pagar
        </Button>
        <progress value="0" className="progress-bar">
          Carregando...
        </progress>
      </form>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                  var mp = new MercadoPago("${
                    process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY
                  }");
                  var cardForm = mp.cardForm({
                    amount: "${totals.total.toString()}",
                    autoMount: true,
                    form: {
                      id: "form-checkout",
                      cardholderName: {
                        id: "form-checkout__cardholderName",
                        placeholder: "Titular do cartão",
                      },
                      cardholderEmail: {
                        id: "form-checkout__cardholderEmail",
                        placeholder: "E-mail",
                      },
                      cardNumber: {
                        id: "form-checkout__cardNumber",
                        placeholder: "Número do cartão",
                      },
                      cardExpirationMonth: {
                        id: "form-checkout__cardExpirationMonth",
                        placeholder: "Mês de vencimento",
                      },
                      cardExpirationYear: {
                        id: "form-checkout__cardExpirationYear",
                        placeholder: "Ano de vencimento",
                      },
                      securityCode: {
                        id: "form-checkout__securityCode",
                        placeholder: "Código de segurança",
                      },
                      installments: {
                        id: "form-checkout__installments",
                        placeholder: "Parcelas",
                      },
                      identificationType: {
                        id: "form-checkout__identificationType",
                        placeholder: "Tipo de documento",
                      },
                      identificationNumber: {
                        id: "form-checkout__identificationNumber",
                        placeholder: "Número do documento",
                      },
                      issuer: {
                        id: "form-checkout__issuer",
                        placeholder: "Banco emissor",
                      },
                    },
                    callbacks: {
                      onFormMounted: error => {
                        if (error) return console.warn("Form Mounted handling error: ", error);
                        // console.log("Form mounted");
                      },
                      onSubmit: event => {
                        event.preventDefault();
                  
                        const {
                          paymentMethodId: payment_method_id,
                          issuerId: issuer_id,
                          cardholderEmail: email,
                          amount,
                          token,
                          installments,
                          identificationNumber,
                          identificationType,
                        } = cardForm.getCardFormData();
                  
                        fetch("/process_payment", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            token,
                            issuer_id,
                            payment_method_id,
                            transaction_amount: Number(amount),
                            installments: Number(installments),
                            description: "Descrição do produto",
                            payer: {
                              email,
                              identification: {
                                type: identificationType,
                                number: identificationNumber,
                              },
                            },
                          }),
                        });
                      },
                      onFetching: (resource) => {
                        console.log("Fetching resource: ", resource);
                        // Animate progress bar
                        const progressBar = document.querySelector(".progress-bar");
                        progressBar.removeAttribute("value");
                  
                        return () => {
                          progressBar.setAttribute("value", "0");
                        };
                      },
                    },
                  });`
        }}
      />
    </Container>
  )
}
