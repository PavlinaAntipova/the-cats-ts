import { FC } from 'react';

import { TFavoritesResult, TVoteInfo } from '@app/api/types/vote';
import Skeleton from '@app/components/common/Skeleton';
import LogItem from '@app/components/extra/LogsSection/LogItem';
import { isFavoritesResult } from '@app/pages/VotingPage/helpers';
import { BasicFeedbackBlock, NotFoundText } from '@app/styles/Common.styled';

import { placeholders } from './helpers';
import { LogsList, StyledLogsBlock } from './styled';

type TLogsBlockProps = {
  logsList: (TVoteInfo | TFavoritesResult)[];
  isLoading: boolean;
  isFetching: boolean;
};

const LogsBlock: FC<TLogsBlockProps> = ({ logsList, isLoading, isFetching }) => {
  return (
    <StyledLogsBlock>
      {isLoading || isFetching ? (
        placeholders.map(item => (
          <BasicFeedbackBlock key={item}>
            <Skeleton />
          </BasicFeedbackBlock>
        ))
      ) : logsList && logsList.length ? (
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
};

export default LogsBlock;
