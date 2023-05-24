import { FC } from 'react';

import { Item, Link } from './styled';
import { TActionNavItemProps } from './types';

const ActionNavItem: FC<TActionNavItemProps> = ({ path, children }) => (
  <Item>
    <Link to={path}>{children}</Link>
  </Item>
);

export default ActionNavItem;
