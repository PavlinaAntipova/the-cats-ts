import { TBreed, TBreedById } from "@app/api/types/breed";
import { TPaginationProps } from "@app/components/common/Pagination";


export type TBreedsSectionProps = {
    data: TBreed[] | TBreedById[] | undefined;
    isLoading: boolean;
    isFetching: boolean;
    pagination?: TPaginationProps;
    limit?: string;
}