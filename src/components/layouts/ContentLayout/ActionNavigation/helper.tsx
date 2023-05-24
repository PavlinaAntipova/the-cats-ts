import { ReactComponent as DislikeIcon } from '@app/assets/icons/dislike.svg';
import { ReactComponent as FavoriteIcon } from '@app/assets/icons/fav.svg';
import { ReactComponent as LikeIcon } from '@app/assets/icons/like.svg';

export const actionMenuList = [
  {
    path: 'likes',
    icon: (
      <LikeIcon
        width="30"
        height="30"
      />
    ),
  },
  {
    path: 'favourites',
    icon: (
      <FavoriteIcon
        width="30"
        height="30"
      />
    ),
  },
  {
    path: 'dislikes',
    icon: (
      <DislikeIcon
        width="30"
        height="30"
      />
    ),
  },
];
