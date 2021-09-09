import { Checkbox } from '@/components/form'
import { useProductsFilter } from '@/contexts'
import { FilterItemsGroupModel } from '@/models/filter'
import { FilterSidebarTitle } from '..'
import { Container, List } from './styles'

type FilterSidebarGroupProps = {
  group: FilterItemsGroupModel
}

export const FilterSidebarGroup = ({ group }: FilterSidebarGroupProps) => {
  const { addToFilter, removeFromFilter, values } = useProductsFilter()

  return (
    <Container>
      <FilterSidebarTitle>{group.title}</FilterSidebarTitle>
      <List>
        {group?.items?.map((item) => (
          <Checkbox
            key={item.slug}
            value={
              !!values &&
              typeof values[group.slug] === 'object' &&
              !!values[group.slug]?.find((value) => value === item.slug)
            }
            onChange={(value) =>
              value
                ? addToFilter(group.slug, item.slug)
                : removeFromFilter(group.slug, item.slug)
            }
          >
            {item.name}
          </Checkbox>
        ))}
      </List>
    </Container>
  )
}

export default FilterSidebarGroup
