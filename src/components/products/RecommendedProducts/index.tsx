import { ProductModel } from '@/models'
import React from 'react'
import { RecommendedProductCard, ProductCardGroupTitle } from '..'
import { Container, List } from './styles'

type RecommendedProductsProps = {
  products: ProductModel[]
}

export const RecommendedProducts = ({ products }: RecommendedProductsProps) => (
  <Container>
    <ProductCardGroupTitle align="left" size="sm">
      Livros Recomendados
    </ProductCardGroupTitle>
    <List>
      {products?.map((product) => (
        <RecommendedProductCard key={product.id} product={product} />
      ))}
    </List>
  </Container>
)
