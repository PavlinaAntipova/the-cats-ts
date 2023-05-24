import breedsImg from '@app/assets/images/common/breeds/pet-breeds.png';
import galleryImg from '@app/assets/images/common/gallery/gallery.png';
import votingImg from '@app/assets/images/common/voting/vote-table.png';

import { TNavItemInfo } from './types';

export const navigationItems: Array<TNavItemInfo> = [
  {
    path: '/voting',
    text: 'Voting',
    imgInfo: { src: votingImg, width: 100, height: 125 },
    bgColor: '#B4B7FF',
  },
  {
    path: '/breeds',
    text: 'Breeds',
    imgInfo: { src: breedsImg, width: 117, height: 163 },
    bgColor: '#97EAB9',
  },
  {
    path: '/gallery',
    text: 'Gallery',
    imgInfo: { src: galleryImg, width: 112, height: 190 },
    bgColor: '#FFD280',
  },
];
