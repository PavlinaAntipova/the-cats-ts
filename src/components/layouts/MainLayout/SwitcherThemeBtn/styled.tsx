import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 0;
`;

export const IconBox = styled.div`
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${props => props.theme.SwitcherThemeBtn.switcherBoxBgColor};
`;

export const SwitcherBox = styled.div`
  position: relative;
  display: inline-flex;
  background-color: rgba(255, 134, 142, 0.2);
  border-radius: 50px;
  width: 44px;
  height: 24px;

  &::after {
    position: absolute;
    top: 50%;
    ${props => props.theme.SwitcherThemeBtn.switcherPosition};
    transform: translateY(-50%);
    content: '';
    width: 16px;
    height: 16px;
    background-color: ${props => props.theme.common.mainAccentColor};
    border-radius: 50%;
  }
`;
