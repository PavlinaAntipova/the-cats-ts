import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  margin-right: 10px;
  background-color: ${props => props.theme.common.mainContextBgColor};
  border-radius: ${props => props.theme.common.borderRadiusMax};

  &:last-child {
    margin-right: 0;
  }
`;

export const Link = styled(NavLink)`
  padding: 15px;
  display: block;
  height: 100%;
  width: 100%;
  border-radius: ${props => props.theme.common.borderRadiusMax};

  & svg {
    fill: ${props => props.theme.common.mainAccentColor};
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.common.secondaryAccentColor};
  }

  &.active {
    background-color: ${props => props.theme.common.mainAccentColor};

    & svg {
      fill: #fff;
    }
  }
`;
