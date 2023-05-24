import styled from 'styled-components';

interface IContentBoxProps {
  location: string;
}

export const ContentBox = styled.div<IContentBoxProps>`
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.common.mainContextBgColor};
  border-radius: ${props => props.theme.common.borderRadiusMax};
  min-height: 100vh;

  @media screen and (min-width: 1440px) {
    min-height: 840px;
    width: 680px;

    ${props => {
      if (props.location === '/') {
        return `
            padding: 0;
            background-color: ${props.theme.HomePage.contentBgColor};
            `;
      } else {
        return `
            padding: 20px;
            `;
      }
    }};
  }
`;

export const MainContent = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 680px;
    margin: 0 auto;
  }
`;

export const LocationBox = styled.div`
  display: inline-block;
  margin-bottom: 20px;
`;
