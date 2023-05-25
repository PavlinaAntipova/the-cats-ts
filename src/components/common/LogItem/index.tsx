import { FC } from 'react';

import { TFavoritesResult, TVoteInfo } from '@app/api/types/vote';
import { ReactComponent as DislikeIcon } from '@app/assets/icons/dislike.svg';
import { ReactComponent as FavoriteIcon } from '@app/assets/icons/fav.svg';
import { ReactComponent as LikeIcon } from '@app/assets/icons/like.svg';

import { ICON_COLORS, getTime, getVotingTypeByValue, isFavoritesResult, isVotingResult } from './helpers';
import { Id, StyledLogItem, Text, Time } from './styled';

type TLogItemProps = {
  item: TVoteInfo | TFavoritesResult;
};

const LogItem: FC<TLogItemProps> = ({ item }) => {
  const { image_id, created_at } = item;

  return (
    <StyledLogItem>
      <Time>{getTime(created_at)}</Time>

      {isFavoritesResult(item) && (
        <>
          <Text>
            Image ID: <Id>{image_id}</Id> was {item.type} {item.type === 'added' ? 'to ' : 'from '}
            {getVotingTypeByValue(undefined)}
          </Text>
          {item.type === 'added' ? (
            <FavoriteIcon
              fill={ICON_COLORS.favorite}
              width="20"
              height="20"
            />
          ) : null}
        </>
      )}

      {isVotingResult(item) && (
        <>
          <Text>
            Image ID: <Id>{image_id}</Id> was added to {getVotingTypeByValue(item?.value as 1 | -1)}
          </Text>
          {item?.value === 1 ? (
            <LikeIcon
              fill={ICON_COLORS.like}
              width="20"
              height="20"
            />
          ) : (
            <DislikeIcon
              fill={ICON_COLORS.dislikes}
              width="20"
              height="20"
            />
          )}
        </>
      )}
    </StyledLogItem>
  );
};

export default LogItem;
