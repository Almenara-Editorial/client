import styled from 'styled-components'

export const FieldsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
`

export const FieldsRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: flex-start;
  gap: var(--space-lg);

  > * {
    flex: 1;
  }
`
