import { TFavoritesResult, TVoteInfo } from "@app/api/types/vote";
import moment from "moment";


export enum ICON_COLORS {
    like = "#97EAB9",
    dislikes = "#FFD280",
    favorite = "#FF868E"
}

type VotingType = "Likes" | "Dislikes" | "Favorites";

export const getVotingTypeByValue = (value: 1 | -1 | undefined): VotingType => {
    if (value === 1) {
        return "Likes";
    }

    if (value === -1) {
        return "Dislikes";
    }

    return "Favorites";
};

export const getTime = (time: string | Date): string => moment(time).local().format('HH:mm');

export const isFavoritesResult = (item: TVoteInfo | TFavoritesResult): item is TFavoritesResult => 'type' in item;

export const isVotingResult = (item: TVoteInfo | TFavoritesResult): item is TVoteInfo => 'value' in item;