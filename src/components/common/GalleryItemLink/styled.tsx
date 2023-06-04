import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
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

export const Text = styled.p`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  padding: 5px 0;
  width: 90%;
  font-size: 16px;
  line-height: 1.5em;
  text-align: center;
  color: ${props => props.theme.common.mainAccentColor};
  background-color: ${props => props.theme.GridItem.btnHoverBgColor};
  border-radius: ${props => props.theme.common.borderRadiusMin};
  opacity: 0;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
