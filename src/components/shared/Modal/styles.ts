import styled, { keyframes } from 'styled-components'

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

const overlayAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--layer-modal);
  border-radius: var(--radius-md);
  background-color: var(--color-background);
  will-change: transform, opacity;
  animation: ${modalAnimation} 0.3s ease;
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: var(--layer-overlay);
  animation: ${overlayAnimation} 0.3s ease;
`
