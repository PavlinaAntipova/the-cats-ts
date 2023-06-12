import { FC } from 'react';

import { TBreed } from '@app/api/types/breed';

import { Feature, FeatureInfo, InfoBox, Item, List, Name, Text } from '../../styled';
import { transformDataByState } from './helpers';

type TInfoBlockProps = {
  breed: TBreed | undefined;
  isLoading: boolean;
  isFetching: boolean;
};

const InfoBlock: FC<TInfoBlockProps> = ({ breed, isLoading, isFetching }) => {
  console.log(transformDataByState({ data: breed?.name, isLoading, isFetching }));
  return (
    <InfoBox>
      <Name>{transformDataByState({ data: breed?.name, isLoading, isFetching })}</Name>
      <Text>{transformDataByState({ data: breed?.description, isLoading, isFetching })}</Text>
      <List>
        <Item>
          <FeatureInfo>
            <Feature>Temperament:</Feature>
            <br /> {transformDataByState({ data: breed?.temperament, isLoading, isFetching })}
          </FeatureInfo>
        </Item>
        <Item>
          <FeatureInfo>
            <Feature>Origin: </Feature>
            {transformDataByState({ data: breed?.origin, isLoading, isFetching })}
          </FeatureInfo>
        </Item>
        <Item>
          <FeatureInfo>
            <Feature>Weight: </Feature>
            {transformDataByState({ data: breed?.weight?.metric, measure: 'kg', isLoading, isFetching })}
          </FeatureInfo>
        </Item>
        <Item>
          <FeatureInfo>
            <Feature>Life span: </Feature>
            {transformDataByState({ data: breed?.life_span, measure: 'years', isLoading, isFetching })}
          </FeatureInfo>
        </Item>
      </List>
    </InfoBox>
  );
};

export default InfoBlock;
