import { MediaMatch } from '@/components/layout'
import { FilterItemsGroupModel } from '@/models/filter'

import { FilterSidebarGroup, FilterSelectedGroup } from '..'
import { Container } from './styles'

type FilterSidebarProps = {
  filters: Record<string, FilterItemsGroupModel>
}

export const FilterSidebar = ({ filters }: FilterSidebarProps) => (
  <MediaMatch greaterThan="medium">
    <Container>
      <FilterSelectedGroup />
      {Object.keys(filters)?.map((key) => (
        <FilterSidebarGroup key={key} group={filters[key]} />
      ))}
    </Container>
  </MediaMatch>
)

export default FilterSidebar
