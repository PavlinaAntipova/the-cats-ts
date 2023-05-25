export type TVote = {
    imageId: string;
    userId: string;
    value: 1 | -1;
}

type TImage = {
    id: string;
    url: string;
}

export type TVoteInfo = {
    id: number;
    image_id: string;
    sub_id: string;
    created_at: string;
    value?: number;
    country_code?: string;
    image: TImage;
}

export type TVoteFavorite = Omit<TVote, 'value'>;

export type TVoteFavoriteResponse = {
    id: string;
    message?: string;
}

export type TFavoritesResult = {
    image_id: string;
    created_at: Date | string;
    type: 'added' | 'deleted';
    key: string;
} & TVoteFavoriteResponse;