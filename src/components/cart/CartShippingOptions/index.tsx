import { Loader } from '@/components/shared'
import { useCart } from '@/contexts'
import { ShippingOptionModel } from '@/models'
import { CartShippingOption } from '..'
import { Container } from './styles'

export type CartShippingOptionsProps = {
  options: ShippingOptionModel[]
}

export const CartShippingOptions = ({ options }: CartShippingOptionsProps) => {
  const { isLoading } = useCart()

  return (
    <Container>
      {isLoading.shipping && <Loader message="Carregando opções de frete" />}
      {!isLoading.shipping &&
        options?.map((option) => (
          <CartShippingOption key={option.id} option={option} />
        ))}
    </Container>
  )
}
