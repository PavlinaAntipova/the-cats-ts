import styled from 'styled-components';

import { BasicBtn } from '@app/styles/Common.styled';

export const SearchForm = styled.form`
  position: relative;
  width: 100%;

  @media screen and (max-width: 767px) {
    order: 3;
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 10px;
    width: 428px;
  }

  @media screen and (min-width: 1440px) {
    width: 470px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  background: #ffffff;
  border-radius: ${props => props.theme.common.borderRadiusMax};
  border: none;
  background-color: ${props => props.theme.common.mainContextBgColor};
  color: ${props => props.theme.common.secondaryTextColor};

  &::placeholder {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.45em;
    color: ${props => props.theme.common.secondaryTextColor};

    @media screen and (max-width: 374px) {
      font-size: 16px;
    }
  }

  &:focus {
    outline: ${props => props.theme.SearchBar.outlineFocus};
  }

  &:hover {
    outline: ${props => props.theme.SearchBar.outlineHover};
  }
`;

export const StyledBtn = styled(BasicBtn)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
`;
