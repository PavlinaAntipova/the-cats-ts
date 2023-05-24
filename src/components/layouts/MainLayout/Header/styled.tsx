import styled from 'styled-components';

interface IStyledHeaderProps {
  location: string;
}

export const StyledHeader = styled('header')<IStyledHeaderProps>`
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1439px) {
    ${props => {
      if (props.location !== '/') {
        return `margin-bottom: 20px;`;
      }
    }}
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 680px;
  }
`;
