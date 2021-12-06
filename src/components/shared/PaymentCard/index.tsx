import {
  AmericanExpress,
  Boleto,
  DinnersClub,
  Mastercard,
  Paypal,
  Visa,
  Wallet
} from '@/components/icons'
import { Container } from './styles'

export type PaymentCardId =
  | 'bolbradesco'
  | 'visa'
  | 'master'
  | 'amex'
  | 'dinners'
  | 'other'

type PaymentCardProps = {
  paymentId: PaymentCardId
  lastFour?: string
}

const paymentIconMatcher = {
  bolbradesco: Boleto,
  visa: Visa,
  dinners: DinnersClub,
  paypal: Paypal,
  master: Mastercard,
  amex: AmericanExpress,
  other: Wallet
}

const paymentNameMatcher = {
  bolbradesco: 'Boleto bancário',
  visa: '',
  dinners: '',
  master: '',
  amex: '',
  other: '',
  paypal: 'Paypal'
}

export const PaymentCard = ({ paymentId, lastFour }: PaymentCardProps) => {
  const Icon = paymentIconMatcher[paymentId] || Wallet

  return (
    <Container>
      <i>
        <Icon />
      </i>
      <div>
        <span>{paymentNameMatcher[paymentId]}</span>
        {lastFour && <span>•••• {lastFour}</span>}
      </div>
    </Container>
  )
}
