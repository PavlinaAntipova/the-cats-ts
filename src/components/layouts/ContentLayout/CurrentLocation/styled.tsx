import styled from 'styled-components';

interface ICurrentLocationProps {
  location: string;
}

export const StyledCurrentLocation = styled.span<ICurrentLocationProps>`
  display: inline-block;
  padding: 7px 30px;
  background-color: ${props => props.theme.common.mainAccentColor};
  border-radius: ${props => props.theme.common.borderRadiusMin};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5em;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;

  &:first-of-type {
    ${props => {
      if (props.location) {
        return `
            margin-bottom: 10px;
            color: ${props.theme.common.mainAccentColor};
            background-color: ${props.theme.PreviousLocationBtn.bgColor};
        `;
      }
    }}
  }

  @media screen and (max-width: 1439px) {
    &:last-of-type {
      ${props => {
        if (props.location) {
          return `
            position: relative;
            left: 50px;
            width: 130px;
        `;
        }
      }}
    }
  }

  @media screen and (min-width: 1440px) {
    margin-right: 10px;
    &:first-of-type {
      ${props => {
        if (props.location) {
          return `
            margin-bottom: 0;
        `;
        }
      }}
    }
  }
`;
