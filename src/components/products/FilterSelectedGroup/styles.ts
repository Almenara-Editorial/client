import styled from 'styled-components'
import { FilterSidebarTitle } from '../FilterSidebarTitle'

export const Container = styled.div``

export const Title = styled(FilterSidebarTitle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;
`

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`
