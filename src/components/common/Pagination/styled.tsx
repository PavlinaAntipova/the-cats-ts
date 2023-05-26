import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;
export const Page = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 40px;
  height: 40px;
  margin: 0 20px 0;
  font-size: 20px;
`;

const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.common.borderRadiusMin};
  font-size: 20px;
  ${props =>
    props.disabled
      ? `
    background-color: #F8F8F7;
    pointer-events: none;

    & svg {
    fill: #c0c0c0;
    }
    `
      : `
  background-color: ${props.theme.Button.staticBgColor};

  & svg {
    fill: ${props.theme.common.mainAccentColor};
  }

  &:hover {
    background-color: ${props.theme.common.mainAccentColor};

    & svg {
      fill: ${props.theme.common.mainContextBgColor};
    }
  }
  `};
`;

export const BackBtn = styled(Btn)``;

export const NextBtn = styled(Btn)``;
