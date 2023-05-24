import styled from 'styled-components';

interface IStyledLayoutProps {
  location: string;
}

export const StyledLayout = styled.div<IStyledLayoutProps>`
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 30px;

    ${props => {
      if (props.location === '/') {
        return `
  margin-left: auto;
  margin-right: auto;`;
      } else {
        return `width: 100%`;
      }
    }};
  }

  @media screen and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    padding: 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 30px 30px 30px 145px;
    display: flex;
  }
`;

export const IntroBox = styled.div`
  @media screen and (min-width: 1440px) {
    position: sticky;
    top: 30px;
    width: 40%;
    margin-right: 135px;
    height: 100%;
  }
`;
