import styled from 'styled-components';

export const VotingPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgSectionWrapper = styled.div`
  position: relative;
  margin-bottom: 52px;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 165px;
  overflow: hidden;
  border-radius: ${props => props.theme.common.borderRadiusMax};
  background-color: #d4d4d4;
  @media screen and (min-width: 768px) {
    height: 375px;
  }
  @media screen and (min-width: 1440px) {
    height: 360px;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const ControlsBlock = styled.ul`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: inline-flex;
  border: ${props => props.theme.VotingPage.controlsBorder};
  border-radius: ${props => props.theme.common.borderRadiusMax};
  background-color: #fff;
  overflow: hidden;
`;

export const ControlBtn = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  & svg {
    width: 20px;
    height: 20px;
    fill: #fff;
    @media screen and (min-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }
`;

export const ControlItem = styled.li`
  width: 60px;
  height: 60px;
  margin-right: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-right: 4px;
    width: 80px;
    height: 80px;
  }
  &:last-child {
    margin-right: 0;
  }
  &:nth-child(1) {
    background-color: #97eab9;
  }
  &:nth-child(2) {
    background-color: ${props => props.theme.common.mainAccentColor};
  }
  &:nth-child(3) {
    background-color: #ffd280;
  }
  &:hover,
  &:focus {
    &:nth-child(1) {
      background-color: rgba(151, 234, 185, 0.3);
    }
    &:nth-child(2) {
      background-color: rgba(255, 134, 142, 0.3);
    }
    &:nth-child(3) {
      background-color: rgba(255, 210, 128, 0.3);
    }
    &:nth-child(1) ${ControlBtn} svg {
      fill: #97eab9;
    }
    &:nth-child(2) ${ControlBtn} svg {
      fill: ${props => props.theme.common.mainAccentColor};
    }
    &:nth-child(3) ${ControlBtn} svg {
      fill: #ffd280;
    }
  }
`;
