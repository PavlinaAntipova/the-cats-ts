import { TFavoritesResult, TVoteInfo } from "@app/api/types/vote";

export const isFavoritesResult = (item: TVoteInfo | TFavoritesResult): item is TFavoritesResult => 'key' in item;