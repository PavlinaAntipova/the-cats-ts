import { Dispatch, SetStateAction, createContext } from 'react';

import { TFavoritesResult, TVoteInfo } from '@app/api/types/vote';

interface IFavoritesContext {
  favoritesResultStore: TFavoritesResult[];
  setFavoritesResultStore: Dispatch<SetStateAction<TFavoritesResult[]>>;
  logsList: (TVoteInfo | TFavoritesResult)[];
  setLogsList: React.Dispatch<React.SetStateAction<(TVoteInfo | TFavoritesResult)[]>>;
}

export const FavoritesContext = createContext<IFavoritesContext>({
  favoritesResultStore: [],
  setFavoritesResultStore: () => undefined,
  logsList: [],
  setLogsList: () => undefined,
});
