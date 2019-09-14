import { keyframes, css } from 'styled-components'

const scale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

const slideDown = keyframes`
  0% {
    transform: translateY(-300%);
    visibility: visible;
  }

  100% {
    transform: translateY(0);
  }
`

export const slideDownAnimate = css`
  animation: ${slideDown} 2.2s ease-out;
`

export const zoomOut = css`
  animation: ${scale} 0.3s ease-out;
`
