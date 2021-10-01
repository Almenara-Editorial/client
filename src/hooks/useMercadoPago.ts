import {
  IdentificationType,
  GetCardTokenParams,
  CardToken,
  GetPaymentMethodsParams,
  PaymentMethods,
  GetInstallmentsParams,
  Installment
} from '@/models'
import { useEffect, useMemo, useState } from 'react'

type MercadoPago = {
  getIdentificationTypes: () => IdentificationType[]
  createCardToken: (params: GetCardTokenParams) => Promise<CardToken>
  getPaymentMethods: (
    params: GetPaymentMethodsParams
  ) => Promise<PaymentMethods>
  getInstallments: (params: GetInstallmentsParams) => Installment[]
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mp: MercadoPago
  }
}

export function useMercadoPago() {
  const [identificationTypes, setIdentificationTypes] =
    useState<IdentificationType[]>()
  const mercadopago: MercadoPago = useMemo(() => {
    return window.mp
  }, [])

  useEffect(() => {
    async function fetchIdentificationTypes() {
      const data = await mercadopago.getIdentificationTypes()

      setIdentificationTypes(data)
    }

    fetchIdentificationTypes()
  }, [mercadopago])

  return { identificationTypes }
}
