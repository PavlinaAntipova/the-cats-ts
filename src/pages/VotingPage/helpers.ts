import { TFavoritesResult, TVoteInfo } from "@app/api/types/vote";
import moment from "moment";


type value = {
    voting: TVoteInfo[],
    favorites: TFavoritesResult[],
}

type TMakeLogHistory = (value: value) => (TVoteInfo | TFavoritesResult)[];

export const makeLogHistory: TMakeLogHistory = ({ voting = [], favorites = [] }) => [...voting, ...favorites].sort((a, b) => moment(b.created_at).valueOf() - moment(a.created_at).valueOf());

export const isFavoritesResult = (item: TVoteInfo | TFavoritesResult): item is TFavoritesResult => 'key' in item;