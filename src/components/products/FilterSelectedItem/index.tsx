import { Close } from '@/components/icons'
import { useProductsFilter, FilterValue } from '@/contexts'
import { Container, RemoveButton } from './styles'

type FilterSelectedItemProps = {
  item: FilterValue
}

export const FilterSelectedItem = ({ item }: FilterSelectedItemProps) => {
  const { updateFilter } = useProductsFilter()

  if (!item.value) return null

  return (
    <Container>
      {item.name}
      <RemoveButton
        onClick={() => updateFilter(item.slug, { ...item, value: false })}
      >
        <Close />
      </RemoveButton>
    </Container>
  )
}

export default FilterSelectedItem
