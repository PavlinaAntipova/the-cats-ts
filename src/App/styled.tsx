import styled from 'styled-components';

export const StyledApp = styled.div`
  background-color: ${props =>
    props?.theme?.common.mainBgColor ? props.theme.common.mainBgColor : '#1D1D1D'};
  height: 100%;
`;
