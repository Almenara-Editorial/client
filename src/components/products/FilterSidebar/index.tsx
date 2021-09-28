import { FilterItemsGroupModel } from '@/models/filter'

import { FilterSidebarGroup, FilterSelectedGroup } from '..'
import { Container } from './styles'

type FilterSidebarProps = {
  filters: Record<string, FilterItemsGroupModel>
}

export const FilterSidebar = ({ filters }: FilterSidebarProps) => (
  <Container>
    <FilterSelectedGroup />
    {Object.keys(filters)?.map((key) => (
      <FilterSidebarGroup key={key} group={filters[key]} />
    ))}
  </Container>
)

export default FilterSidebar
