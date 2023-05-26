import { TVoteInfo } from "@app/api/types/vote";
import { LIMIT_GALLERY_ITEMS_PER_PAGE } from "@app/constants";


export const getElementsPerPage = (page: number, array: TVoteInfo[]): TVoteInfo[] => {
  if (array.length === LIMIT_GALLERY_ITEMS_PER_PAGE) {
    return array;
  }
  
  const elementsPerPage = LIMIT_GALLERY_ITEMS_PER_PAGE;
  const startIndex = (page - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;

  return array.slice(startIndex, endIndex);
}