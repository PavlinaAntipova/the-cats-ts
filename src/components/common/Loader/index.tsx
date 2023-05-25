import { FC } from 'react';

import { Box, Cat, EarLeft, EarRight, EyeLeft, EyePupil, EyeRight, Face, Muzzle, Text } from './styled';
import { TLoader } from './types';

const Loader: FC<TLoader> = ({ size }) => (
  <Box size={size}>
    <div>
      <Text size={size}>Loading</Text>
      <Cat size={size}>
        <EarLeft />
        <EarRight />
        <Face>
          <EyeLeft>
            <EyePupil />
          </EyeLeft>
          <EyeRight>
            <EyePupil />
          </EyeRight>
          <Muzzle />
        </Face>
      </Cat>
    </div>
  </Box>
);

export default Loader;
