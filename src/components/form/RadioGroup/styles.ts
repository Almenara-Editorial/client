import styled from 'styled-components'

export const Container = styled.div``

export const Radios = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const Radio = styled.button.attrs({ type: 'button' })`
  display: flex;
  padding: 2.4rem;

  align-items: center;
  gap: 2.4rem;
  cursor: pointer;
  transition: all 0.2s;
  background: none;
  font: inherit;
  border: 0;

  &:focus-within {
    outline: none;
  }

  > span {
    flex-shrink: 0;
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
    > span {
      &:before {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
`

export const RadioWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem;

  &:hover {
    box-shadow: 0 0 0 1px var(--color-neutral-100);
  }

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 1px var(--color-neutral-200);
  }

  &[data-checked='true'] {
    background-color: var(--color-neutral-50);
    box-shadow: 0 0 0 1px var(--color-neutral-200);

    > span {
      &:before {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
`

export const ContentWrapper = styled.div`
  padding-inline: 2.4rem;
`

export const RadioTitle = styled.div`
  font-size: var(--font-md);
  font-weight: var(--body-bold);
`
