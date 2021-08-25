import styled from 'styled-components'

type HrProps = {
  space?: 'md' | 'lg'
}
export const Hr = styled.hr.attrs<HrProps>(({ space }) => ({
  'data-space': space
}))<HrProps>`
  height: 1px;
  margin-block: var(--space-lg);
  border: 0;
  background-color: var(--color-neutral-100);

  &[data-space='lg'] {
    margin-block: var(--space-lg);
  }

  &[data-space='md'] {
    margin-block: var(--space-md);
  }
`
