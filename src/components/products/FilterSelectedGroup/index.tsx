import { Anchor } from '@/components/shared'
import { useProductsFilter } from '@/contexts'
import { Container } from './styles'

export const FilterSelectedGroup = () => {
  const { values, cleanFilter } = useProductsFilter()

  if (!values) return null

  return (
    <Container>
      <Anchor as="button" size="sm" onClick={cleanFilter}>
        Limpar filtros
      </Anchor>
    </Container>
  )
}

export default FilterSelectedGroup
