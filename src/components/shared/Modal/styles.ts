import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: var(--radius-md);

  background-color: var(--color-background);

  will-change: transform, opacity;
`

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`
