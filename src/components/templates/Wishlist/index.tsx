import { AccountLayout } from '@/components/layout'
import { ProductCard } from '@/components/products'
import { ProductCardModel } from '@/models'
import { Products, Title } from './styles'

export type WishlistTemplateProps = {
  products: ProductCardModel[]
}

export function WishlistTemplate({ products }: WishlistTemplateProps) {
  return (
    <AccountLayout>
      <Title>Sua lista de desejos</Title>
      <Products>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Products>
    </AccountLayout>
  )
}
