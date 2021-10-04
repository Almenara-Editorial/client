import { Payer } from './mercadopago'

export type CheckoutValues = {
  shipping: ShippingValues
  payment: OtherPaymentsValues | CreditCardPaymentValues | undefined
  review: CheckoutReviewValues
}

export type ShippingValues = {
  cep: string
  street: string
  number: string
  info: string
  city: string
  state: string
  neighborhood: string
}

export type CreditCardPaymentValues = {
  id: string
  cardExpiration: string
  cardNumber: string
  lastFour: string
  cardHolderEmail: string
  installments: number
  installmentsText: string
  cardHolderName: string
  cardExpirationMonth: string
  cardExpirationYear: string
  securityCode: string
  identificationType: string
  identificationNumber: string
  paymentTypeId: string
  issuerId: string
  token: string
  payer: Payer
}

export type OrderCreditCardPaymentValues = Pick<
  CreditCardPaymentValues,
  | 'token'
  | 'installments'
  | 'installmentsText'
  | 'id'
  | 'issuerId'
  | 'identificationNumber'
  | 'identificationType'
  | 'paymentTypeId'
> & { lastFour: string }

export type CheckoutReviewValues = {
  comments?: string
}

export type OtherPaymentsValues = Record<keyof CreditCardPaymentValues, never> &
  Pick<CreditCardPaymentValues, 'paymentTypeId' | 'id'> &
  Pick<Payer, 'email' | 'identification' | 'firstName' | 'lastName'>
