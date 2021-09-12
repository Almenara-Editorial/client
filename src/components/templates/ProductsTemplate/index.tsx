import {
  ProductsCards,
  FilterSidebar,
  RecommendedProducts
} from '@/components/products'
import { ProductModel } from '@/models'
import { FilterItemsGroupModel } from '@/models/filter'
import { Container, Main } from './styles'

export type ProductsTemplateProps = {
  products: ProductModel[]
  recommended: ProductModel[]
  filters: Record<string, FilterItemsGroupModel>
}

export function ProductsTemplate({
  products,
  recommended,
  filters
}: ProductsTemplateProps) {
  return (
    <Container>
      <RecommendedProducts products={recommended} />
      <Main>
        <FilterSidebar filters={filters} />
        <ProductsCards products={products} />
      </Main>
    </Container>
  )
}
