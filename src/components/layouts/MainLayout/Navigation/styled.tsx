import styled from 'styled-components';

export const StyledNavigation = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    margin: -15px;
  }
`;

export const Item = styled.li`
  margin: 0 0 20px;

  &:last-child {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    margin: 15px;
    flex-basis: calc(100% / 3 - 30px);

    &:last-child {
      margin: 15px 0 15px 15px;
    }
  }
`;
