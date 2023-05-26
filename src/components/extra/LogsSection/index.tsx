import { FC } from 'react';

import { TFavoritesResult, TVoteInfo } from '@app/api/types/vote';
import LogItem from '@app/components/extra/LogsSection/LogItem';
import { isFavoritesResult } from '@app/pages/VotingPage/helpers';
import { NotFoundText } from '@app/styles/Common.styled';

import { LogsList, StyledLogsBlock } from './styled';

type TLogsBlockProps = {
  logsList: (TVoteInfo | TFavoritesResult)[];
};

const LogsBlock: FC<TLogsBlockProps> = ({ logsList }) => (
  <StyledLogsBlock>
    {logsList && logsList.length ? (
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
  </StyledLogsBlock>
);

export default LogsBlock;
