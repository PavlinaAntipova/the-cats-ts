import styled, { keyframes } from 'styled-components';

const shimmerAnimation = keyframes`
 100% {
      transform: translateX(100%);
    }
`;

export const StyledSkeleton = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #d4d4d4;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.1) 20%,
      rgba(255, 255, 255, 0.3) 60%,
      rgba(255, 255, 255, 0)
    );
    animation-name: ${shimmerAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;
