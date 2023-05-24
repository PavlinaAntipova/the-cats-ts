import { Dispatch, SetStateAction } from 'react';

export type TContentLayoutProps = {
  toggleMobileMenu: () => void;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};
