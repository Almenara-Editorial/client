import styled from 'styled-components'

export const Radios = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const Radio = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  padding: 1.8rem;
  cursor: pointer;
  border-radius: 0.4rem;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 0 1px var(--color-neutral-100);
  }

  > span {
    position: relative;
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    background: var(--color-white);
    border-radius: 100%;
    box-shadow: 0 0 0 1px var(--color-neutral-200);

    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      content: '';
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      background: var(--color-neutral-900);
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.2s ease;
      will-change: transform;
      border-radius: 100%;
    }
  }
  &[data-checked='true'] {
    box-shadow: 0 0 0 1px var(--color-neutral-200);

    > span {
      &:before {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
`
