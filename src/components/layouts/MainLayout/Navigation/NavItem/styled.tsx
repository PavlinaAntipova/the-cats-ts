import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ImgBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-radius: ${props => props.theme.common.borderRadiusMax};
  border: 4px solid rgba(255, 255, 255, 0.6);
  background-color: ${props => props.color};
`;

export const TextBox = styled.span`
  display: block;
  padding: 10px 0;
  border-radius: ${props => props.theme.common.borderRadiusMin};
  background-color: ${props => props.theme.common.mainContextBgColor};
  text-transform: uppercase;
  color: ${props => props.theme.common.mainAccentColor};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33em;
  text-align: center;
  letter-spacing: 2px;
`;

export const Btn = styled(NavLink)`
  display: block;
  height: 100%;

  &:hover,
  &:focus {
    & ${TextBox} {
      background-color: ${props => props.theme.common.secondaryAccentColor};
    }
  }

  &.active {
    & ${ImgBox} {
      border: 4px solid ${props => props.theme.common.secondaryAccentColor};
    }

    & ${TextBox} {
      background-color: ${props => props.theme.common.mainAccentColor};
      color: #fff;
    }
  }
`;
