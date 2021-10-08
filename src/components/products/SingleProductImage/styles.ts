import { shimmer } from '@/styles/shimmer'
import styled, { keyframes } from 'styled-components'

const popupAnimation = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`

export const Container = styled.div`
  width: 100%;
  max-width: 57.8rem;
  flex: 1 0 57.8rem;
  display: flex;

  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    ${shimmer}
  }
`

export const Popup = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: var(--layer-modal);
  background-color: rgba(0, 0, 0, 0.6);

  animation: ${popupAnimation} 0.2s ease;

  .close-button {
    position: absolute;
    right: 5rem;
    top: 5rem;
    color: white;
    z-index: var(--layer-modal);
    cursor: pointer;
    width: 3.2rem;
    height: 3.2rem;
    font-size: 2.4rem;
    background: none;
    border: 0;
  }
`

export const PopupImage = styled.div`
  width: 80vw !important;
  height: 80vh !important;
  padding: 10vh 10vw;

  > div {
    width: 100%;
    height: 100%;
  }
`
