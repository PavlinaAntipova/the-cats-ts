import styled from 'styled-components';

import { BasicText } from '@app/styles/Common.styled';

export const Title = styled.h1`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 44px;
  line-height: 1.3em;
  color: ${props => props.theme.common.mainTextColor};
`;

export const Description = styled(BasicText)`
  margin-bottom: 60px;
`;

export const Text = styled(BasicText)`
  font-weight: 500;
  color: ${props => props.theme.common.mainTextColor};
  margin-bottom: 20px;
`;
