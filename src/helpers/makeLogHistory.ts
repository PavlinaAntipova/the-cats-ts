import { TFavoritesResult, TVoteInfo } from "@app/api/types/vote";
import moment from "moment";

type TValue = {
    voting: TVoteInfo[],
    favorites: TFavoritesResult[],
}

type TMakeLogHistory = (value: TValue) => (TVoteInfo | TFavoritesResult)[];

export const makeLogHistory: TMakeLogHistory = ({ voting = [], favorites = [] }) => [...voting, ...favorites].sort((a, b) => moment(b.created_at).valueOf() - moment(a.created_at).valueOf());