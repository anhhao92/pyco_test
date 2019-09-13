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

export const zoomOut = css`
  animation: ${scale} 0.3s ease-out;
`
