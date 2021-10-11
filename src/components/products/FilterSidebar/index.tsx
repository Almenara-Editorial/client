import { Filter } from '@/components/icons'
import { MediaMatch } from '@/components/layout'
import { Modal } from '@/components/shared'
import { useModal } from '@/hooks'
import { FilterItemsGroupModel } from '@/models/filter'

import { FilterSidebarGroup, FilterSelectedGroup } from '..'
import { Container, FilterButton } from './styles'

type FilterSidebarProps = {
  filters: Record<string, FilterItemsGroupModel>
}

export const FilterSidebar = ({ filters }: FilterSidebarProps) => {
  const modalMethods = useModal()

  return (
    <>
      <MediaMatch greaterThan="medium">
        <Container>
          <FilterSelectedGroup />
          {Object.keys(filters)?.map((key) => (
            <FilterSidebarGroup key={key} group={filters[key]} />
          ))}
        </Container>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <FilterButton onClick={modalMethods.openModal}>
          <Filter />
        </FilterButton>
        <Modal {...modalMethods}>
          <FilterSelectedGroup />
          {Object.keys(filters)?.map((key) => (
            <FilterSidebarGroup key={key} group={filters[key]} />
          ))}
        </Modal>
      </MediaMatch>
    </>
  )
}

export default FilterSidebar
