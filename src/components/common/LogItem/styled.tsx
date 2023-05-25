import styled from 'styled-components';

export const StyledLogItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 20px 15px;
  width: 100%;
  margin-bottom: 10px;
  background-color: ${props => props.theme.LogItem.bgColor};
  border-radius: ${props => props.theme.common.borderRadiusMin};

  &:last-child {
    margin-bottom: 0;
  }
  & svg {
    @media screen and (max-width: 767px) {
      order: 2;
    }
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Time = styled.span`
  display: inline-block;
  padding: 3px 10px;
  color: ${props => props.theme.common.mainTextColor};
  background-color: ${props => props.theme.LogItem.timeBlockBgColor};
  border-radius: 5px;

  @media screen and (max-width: 767px) {
    order: 1;
  }

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.5em;
  color: ${props => props.theme.common.secondaryTextColor};

  @media screen and (max-width: 767px) {
    order: 3;
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-right: auto;
  }
`;

export const Id = styled.span`
  font-weight: 500;
  color: ${props => props.theme.common.mainTextColor};
`;
