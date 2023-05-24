import { useParams } from "react-router-dom";

import { usePageName } from "@app/hooks/usePageName";

type UrlParamType = string | undefined;

export const useBreadCrumbs = (): [string, UrlParamType] => {
    const { breedId } = useParams();
    const pageName = usePageName();
    const currentPage = pageName.split('/').filter(item => item !== breedId);

    return [currentPage[0], breedId];
  };