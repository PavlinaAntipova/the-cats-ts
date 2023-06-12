import { useParams } from "react-router-dom";

import { usePageName } from "@app/hooks/usePageName";

type UrlParamType = string | undefined;

export const useBreadCrumbs = (): [string, UrlParamType] => {
    const { id } = useParams();
    const pageName = usePageName();
    const currentPage = pageName.split('/').filter(item => item !== id);

    return [currentPage[0], id];
  };