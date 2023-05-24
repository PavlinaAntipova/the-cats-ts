import { useLocation } from "react-router-dom";

export const usePageName = (): string => {
    const { pathname } = useLocation();

    return pathname.slice(1);
  };