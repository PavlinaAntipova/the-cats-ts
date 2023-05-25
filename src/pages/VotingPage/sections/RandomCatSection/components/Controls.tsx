import { Dispatch, FC, MouseEvent, SetStateAction, useState } from 'react';

import moment from 'moment';
import { nanoid } from 'nanoid';
import { useMutation, useQueryClient } from 'react-query';

import { favoriteAPI, votingAPI } from '@app/api';
import { TFavoritesResult } from '@app/api/types/vote';
import { ReactComponent as DislikeIcon } from '@app/assets/icons/dislike.svg';
import { ReactComponent as FavouriteFullIcon } from '@app/assets/icons/fav-full.svg';
import { ReactComponent as FavouriteIcon } from '@app/assets/icons/fav.svg';
import { ReactComponent as LikeIcon } from '@app/assets/icons/like.svg';
import useLocalStorage from '@app/hooks/useLocalStorage';
import { ControlBtn, ControlItem, ControlsBlock } from '@app/pages/VotingPage/styled';

type TControlsProps = {
  imageId: string;
  favoritesResultStore: TFavoritesResult[];
  setFavoritesResultStore: Dispatch<SetStateAction<TFavoritesResult[]>>;
};

const Controls: FC<TControlsProps> = ({ imageId, favoritesResultStore, setFavoritesResultStore }) => {
  const queryClient = useQueryClient();
  const [favoriteId, setFavoriteId] = useState<string>('');
  const [userId] = useLocalStorage<string>('user_id');

  const { mutate: makeVote } = useMutation(votingAPI.makeVote, {
    onSuccess: () => {
      queryClient.invalidateQueries('votingCat');
      queryClient.invalidateQueries('votingResult');
      setFavoriteId('');
    },
  });

  const { data: dataFavorite, mutate: makeFavorite } = useMutation(favoriteAPI.makeFavorite, {
    onSuccess: data => {
      setFavoritesResultStore([
        ...favoritesResultStore,
        { ...data, image_id: imageId, created_at: moment().toDate(), type: 'added', key: nanoid() },
      ]);
      queryClient.invalidateQueries('favoriteResult');
      setFavoriteId(data.id);
    },
  });

  const { mutate: deleteFavorite } = useMutation(favoriteAPI.deleteFavorite, {
    onSuccess: () => {
      dataFavorite &&
        setFavoritesResultStore([
          ...favoritesResultStore,
          {
            ...dataFavorite,
            image_id: imageId,
            created_at: moment().toDate(),
            type: 'deleted',
            key: nanoid(),
          },
        ]);
      queryClient.invalidateQueries('favoriteResult');
      setFavoriteId('');
    },
  });

  const handleFavoriteClick = () => {
    favoriteId ? deleteFavorite(favoriteId) : makeFavorite({ imageId, userId });
  };

  const handleVotingClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.dataset.value;
    if (value) {
      makeVote({ imageId, userId, value: +value as 1 | -1 });
    }
  };

  return (
    <ControlsBlock>
      <ControlItem>
        <ControlBtn
          data-value={1}
          onClick={handleVotingClick}
        >
          <LikeIcon />
        </ControlBtn>
      </ControlItem>

      <ControlItem>
        <ControlBtn onClick={handleFavoriteClick}>
          {favoriteId ? <FavouriteFullIcon /> : <FavouriteIcon />}
        </ControlBtn>
      </ControlItem>

      <ControlItem>
        <ControlBtn
          data-value={-1}
          onClick={handleVotingClick}
        >
          <DislikeIcon />
        </ControlBtn>
      </ControlItem>
    </ControlsBlock>
  );
};

export default Controls;
