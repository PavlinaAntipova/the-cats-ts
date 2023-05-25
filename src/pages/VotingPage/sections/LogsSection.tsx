import { FC } from 'react';

import { TFavoritesResult, TVoteInfo } from '@app/api/types/vote';
import LogItem from '@app/components/common/LogItem';
import { isFavoritesResult } from '@app/pages/VotingPage/helpers';
import { LogsList } from '@app/pages/VotingPage/styled';
import { NotFoundText } from '@app/styles/Common.styled';

type TLogsBlockProps = {
  logsList: (TVoteInfo | TFavoritesResult)[];
};

const LogsBlock: FC<TLogsBlockProps> = ({ logsList }) => (
  <div>
    {logsList.length ? (
      <LogsList>
        {logsList.map(item => (
          <LogItem
            key={isFavoritesResult(item) ? item.key : item.id}
            item={item}
          />
        ))}
      </LogsList>
    ) : (
      <NotFoundText>{`You haven't made vote yet...`}</NotFoundText>
    )}
  </div>
);

export default LogsBlock;
