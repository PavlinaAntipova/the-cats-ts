import { ChangeEvent, MouseEvent } from "react"

export type TFilterProps = {
    limit: string;
    breed: string;
    isDisabled: boolean;
    handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
    handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
};