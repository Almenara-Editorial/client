export type Paging = {
  total: number
  limit: number
  offset: number
}

export type PayerCost = {
  installment_rate: number
  discount_rate: number
  min_allowed_amount: number
  labels: string[]
  installments: number
  reimbursement_rate?: string
  max_allowed_amount: number
  payment_method_option_id: string
  recommended_message: string
}

export type Issuer = {
  default: boolean
  name: string
  id: number
}

export type FinancingDeals = {
  legals?: string
  installments?: string
  expiration_date?: string
  start_date?: string
  status: string
}

export type SecurityCode = {
  mode: string
  card_location: string
  length: number
}

export type CardNumber = {
  length: number
  validation: string
}

export type Bin = {
  pattern: string
  installments_pattern: string
  exclusion_pattern: string
}

export type Setting = {
  security_code: SecurityCode
  card_number: CardNumber
  bin: Bin
}

export type Result = {
  financial_institutions: string[]
  secure_thumbnail: string
  payer_costs: PayerCost[]
  issuer: Issuer
  total_financial_cost?: string
  min_accreditation_days: number
  max_accreditation_days: number
  merchant_account_id?: string
  id: string
  payment_type_id: string
  accreditation_time: number
  thumbnail: string
  bins: string[]
  marketplace: string
  deferred_capture: string
  agreements: string[]
  labels: string[]
  financing_deals: FinancingDeals
  name: string
  site_id: string
  processing_mode: string
  additional_info_needed: string[]
  status: string
  settings: Setting[]
}

export interface Identification {
  number: string
  type: string
}

export interface Cardholder {
  identification: Identification
  name: string
}

export interface CardToken {
  id: string
  public_key: string
  first_six_digits: string
  expiration_month: number
  expiration_year: number
  last_four_digits: string
  cardholder: Cardholder
  status: string
  date_created: Date
  date_last_updated: Date
  date_due: Date
  luhn_validation: boolean
  live_mode: boolean
  require_esc: boolean
  card_number_length: number
  security_code_length: number
}

export type IdentificationType = {
  id: string
  name: string
  type: string
  min_length: number
  max_length: number
}

export type GetCardTokenParams = {
  cardNumber: string
  cardholderName: string
  cardExpirationMonth: string
  cardExpirationYear: string
  securityCode: string
  identificationType: string
  identificationNumber: string
  cardId?: string
}

export type GetPaymentMethodsParams = {
  bin: string
  processingMode?: 'aggregator' | 'gateway'
}

export type PaymentMethods = {
  paging: Paging
  results: Result[]
}

export type GetInstallmentsParams = {
  amount: string
  bin: string
  locale: string
  processingMode: 'aggregator' | 'gateway'
}

export type Installment = {
  payment_method_id: string
  payment_type_id: string
  issuer: Issuer
  processing_mode: string
  merchant_account_id?: string
  payer_costs: PayerCost[]
  agreements?: string
}
