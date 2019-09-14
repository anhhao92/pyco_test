import styled from 'styled-components'
import { zoomOut } from '../../../theme'

export const ThumbnailContainer = styled.div`
  padding: 10px;
  cursor: pointer;
`
export const Thumbnail = styled.img`
  height: 255px;
  width: 100%;
  object-fit: cover;
`

export const ThumbnailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
`

export const CardBody = styled.div`
  height: 300px;
  background-color: #fff;
`

export const CardFooter = styled.div`
  margin: 10px 0;
  height: 30px;
  display: flex;
`
export const AuthorFooter = styled.div`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
`
export const FooterThumbnail = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 18px;
`

export const BackDropContainer = styled.div`
  background-color: #121212;
  background-position: 50%;
  cursor: pointer;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999998;

  ${zoomOut}
`

export const ViewCardBody = styled.img`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  z-index: auto;
  object-fit: contain;
  width: 100%;
  height: 100%;
`
//     .keyframes(fade-in; {
//       0% {
//         opacity: 0;
//         transform: scale(0.9);
//       }
//       to {
//         opacity: 1;
//         transform: scale(1);
//       }
//     });
//     .animation(fade-in 0.2s ease-out);
