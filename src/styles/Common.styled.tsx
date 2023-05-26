import styled from 'styled-components';

import { GALLERY_GRID } from '@app/constants';

export const BasicText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.45em;
  color: ${props => props.theme.common.secondaryTextColor};
`;

export const BasicBtn = styled.button`
  padding: 10px;
  border-radius: ${props => props.theme.common.borderRadiusMin};
  background-color: ${props => props.theme.Button.staticBgColor};

  & svg {
    fill: ${props => props.theme.common.mainAccentColor};
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.common.mainAccentColor};

    & svg {
      fill: #fff;
    }
  }
`;

export const BasicFeedbackBlock = styled.div`
  padding: 18px 20px;
  background-color: ${props => props.theme.NotFoundText.bgColor};
  border-radius: ${props => props.theme.common.borderRadiusMin};
`;

export const NotFoundText = styled.p`
  color: ${props => props.theme.common.secondaryTextColor};
  font-size: 16px;
  line-height: 1.5em;
`;

export const ImagesGrid = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    counter-reset: li;
    grid-auto-rows: 140px;
    grid-gap: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
  }
`;

export const ImageItem = styled.li`
  position: relative;
  background-color: #c4c4c4;
  border-radius: ${props => props.theme.common.borderRadiusMax};
  height: 210px;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 140px;
  }

  & button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: ${props => props.theme.GridItem.btnHoverBgColor};
    border-radius: ${props => props.theme.common.borderRadiusMin};
    opacity: 0;
  }

  & div::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 134, 142, 0.6);
    opacity: 0;
  }

  &:hover,
  &:focus {
    & div::before,
    & button {
      opacity: 1;
    }
  }

  & p {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    padding: 5px 0;
    width: 90%;
    font-size: 16px;
    line-height: 1.5em;
    text-align: center;
    color: ${props => props.theme.common.mainAccentColor};
    background-color: ${props => props.theme.GridItem.btnHoverBgColor};
    border-radius: ${props => props.theme.common.borderRadiusMin};
    opacity: 0;
  }

  & a::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 134, 142, 0.6);
    opacity: 0;
  }

  & a:hover,
  & a:focus {
    &::before,
    & p {
      opacity: 1;
    }
  }

  & img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1440px) {
    ${() => `
      &:nth-child(10n + ${GALLERY_GRID.THE_FIRST_ITEM}),
      &:nth-child(10n + ${GALLERY_GRID.THE_FORTH_ITEM}),
      &:nth-child(10n + ${GALLERY_GRID.THE_EIGHTH_ITEM}),
      &:nth-child(10n + ${GALLERY_GRID.THE_NINTH_ITEM}) {
        height: 300px;
    }`}

    ${() => `
      &:nth-child(10n + ${GALLERY_GRID.THE_FIRST_ITEM}),
      &:nth-child(10n + ${GALLERY_GRID.THE_EIGHTH_ITEM}) {
         grid-column: auto/span 1;
      grid-row: auto/span 2;

      & img {
        object-fit: cover;
      }
    }`}

    ${() => `
      &:nth-child(10n + ${GALLERY_GRID.THE_FORTH_ITEM}),
      &:nth-child(10n + ${GALLERY_GRID.THE_NINTH_ITEM}) {
        grid-column: auto/span 2;
      grid-row: auto/span 2;
    }`}
  }
`;
