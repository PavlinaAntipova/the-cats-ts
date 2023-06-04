import { MouseEvent } from "react";

export type TGalleryItemButtonProps = {
    id: number;
    src: string;
    handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
    isFavorited: boolean;
    imgId: string
}