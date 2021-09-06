import { ProductModel } from '@/models'
import { Container } from './styles'

export type ProductsTemplateProps = {
  products: ProductModel[]
}

export function ProductsTemplate({ products }: ProductsTemplateProps) {
  return <Container>Template Produtos</Container>
}
