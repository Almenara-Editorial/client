import { Filter } from '@/components/icons'
import { MediaMatch } from '@/components/layout'
import { Modal } from '@/components/shared'
import { useModal } from '@/hooks'
import { FilterItemsGroupModel } from '@/models/filter'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { FilterSidebarGroup, FilterSelectedGroup } from '..'
import { Container, FilterButton, FilterModal } from './styles'

type FilterSidebarProps = {
  filters: Record<string, FilterItemsGroupModel>
}

export const FilterSidebar = ({ filters }: FilterSidebarProps) => {
  const modalMethods = useModal()
  const { asPath } = useRouter()

  useEffect(() => {
    modalMethods.closeModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath])

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
        <Modal {...modalMethods} as={FilterModal}>
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
