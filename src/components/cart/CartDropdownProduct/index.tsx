import { NumberField } from '@/components/form'
import { Anchor, Image } from '@/components/shared'
import { CartProductModel } from '@/models'
import { formatToCurrency } from '@/utils'
import { Container, Details, ProductName, ProductPrice, Thumbnail } from './styles'

export type CartDropdownProductProps = {
  product: CartProductModel
}

export const CartDropdownProduct = ({ product }: CartDropdownProductProps) => {
  return (
    <Container>
      <Thumbnail>
        <Image src={product.imageSrc} width="80" height="117" objectFit="contain" />
      </Thumbnail>
      <Details>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatToCurrency(product.price)}</ProductPrice>
        <NumberField value={product.quantity} />
        <div>
          <Anchor as="button" size="sm" color="light">
            Remover
          </Anchor>
        </div>
      </Details>
    </Container>
  )
}

export default CartDropdownProduct
