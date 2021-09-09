import { ProductsCards, FilterSidebar } from '@/components/products'
import { ProductModel } from '@/models'
import { FilterItemsGroupModel } from '@/models/filter'
import { Container, Main } from './styles'

export type ProductsTemplateProps = {
  products: ProductModel[]
  filters: Record<string, FilterItemsGroupModel>
}

export function ProductsTemplate({ products, filters }: ProductsTemplateProps) {
  return (
    <Container>
      <Main>
        <FilterSidebar filters={filters} />
        <ProductsCards products={products} />
      </Main>
    </Container>
  )
}
