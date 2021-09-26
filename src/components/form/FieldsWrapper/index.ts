import styled from 'styled-components'

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
`

export const FieldsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-lg);

  > * {
    flex: 1;
  }
`
