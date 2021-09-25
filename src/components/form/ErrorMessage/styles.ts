import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--color-danger-300);
  font-size: var(--font-sm);
  margin-top: var(--space-xs);

  i {
    margin-right: 0.8rem;
    font-size: 1rem;
    line-height: 0;
  }

  &[data-align='center'] {
    text-align: center;
    justify-content: center;
  }

  &[data-align='left'] {
    text-align: left;
    justify-content: flex-start;
  }

  &[data-align='right'] {
    text-align: right;
    justify-content: flex-end;
  }
`
