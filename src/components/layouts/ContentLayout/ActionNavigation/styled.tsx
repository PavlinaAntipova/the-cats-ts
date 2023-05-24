import styled from 'styled-components';

export const StyledActionNavigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media screen and (max-width: 374px) {
    align-items: center;
  }

  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const MenuBtn = styled.button`
  padding: 21px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.Modal.closeBtnBgColor};
  border-radius: ${props => props.theme.common.borderRadiusMax};

  & svg {
    fill: ${props => props.theme.common.mainAccentColor};
  }

  @media screen and (max-width: 374px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    margin-right: 10px;
  }

  @media screen and (max-width: 767px) {
    order: 1;
  }

  @media screen and (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const List = styled.ul`
  display: flex;

  @media screen and (max-width: 767px) {
    order: 2;
  }
`;
