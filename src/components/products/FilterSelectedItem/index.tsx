// import { Close } from '@/components/icons'
// import { useProductsFilter } from '@/contexts'
import { Container } from './styles'

type FilterSelectedItemProps = {
  item: {
    value: string
    name: string
    slug: string
  }
}

export const FilterSelectedItem = ({ item }: FilterSelectedItemProps) => {
  // const { addToFilter } = useProductsFilter()

  if (!item.value) return null

  return (
    <Container>
      {item.name}
      {/* <RemoveButton
        onClick={() => addToFilter(item.slug, { ...item, value: false })}
      >
        <Close />
      </RemoveButton> */}
    </Container>
  )
}

export default FilterSelectedItem
