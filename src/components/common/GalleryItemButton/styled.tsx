import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 134, 142, 0.6);
    opacity: 0;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.GridItem.btnHoverBgColor};
  border-radius: ${props => props.theme.common.borderRadiusMin};
  opacity: 0;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

//   // for gallery cards
//   & a::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     background-color: rgba(255, 134, 142, 0.6);
//     opacity: 0;
//   }

//   & p {
//     position: absolute;
//     bottom: 10px;
//     left: 50%;
//     transform: translateX(-50%);
//     z-index: 3;
//     padding: 5px 0;
//     width: 90%;
//     font-size: 16px;
//     line-height: 1.5em;
//     text-align: center;
//     color: ${props => props.theme.common.mainAccentColor};
//     background-color: ${props => props.theme.GridItem.btnHoverBgColor};
//     border-radius: ${props => props.theme.common.borderRadiusMin};
//     opacity: 0;
//   }

//   & a:hover,
//   & a:focus {
//     &::before,
//     & p {
//       opacity: 1;
//     }
//   }
