import { NumberField } from '@/components/form'
import { Button, Hr } from '@/components/shared'
import { SingleProductModel } from '@/models'
import { SingleProductPrice, SingleProductTitle, SelectAddressButton, ButtonWishlist } from '..'
import { Container, Bottom, QuantityBuy } from './styles'

export type SingleProductBuyPanelProps = Pick<SingleProductModel, 'name' | 'price' | 'stock' | 'installments'>

export const SingleProductBuyPanel = ({ name, price, installments, stock }: SingleProductBuyPanelProps) => (
  <Container>
    <SingleProductTitle>{name}</SingleProductTitle>
    <Hr />
    <Bottom>
      <SingleProductPrice price={price} installments={installments} />
      <SelectAddressButton />
      <QuantityBuy>
        <NumberField min={1} max={stock} />
        <Button size="rg-wide">Comprar</Button>
      </QuantityBuy>
      <ButtonWishlist isInWishlist={false} />
    </Bottom>
  </Container>
)

export default SingleProductBuyPanel
