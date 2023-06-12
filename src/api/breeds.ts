import axios from 'axios';
import { TBreed, TBreedById } from './types/breed';

type TBreedSort = { limit: string; order: string; page: number; };

type TBreedIdSort = { limit: string; id: string; };

const getBreeds = async ({ limit, order, page }: TBreedSort): Promise<TBreed[]> => {
  const apiPage = page - 1;
  const url = limit && order ? `/breeds?limit=${limit}&order=${order}&page=${apiPage}` : limit && !order ? `/breeds?limit=${limit}&page=${apiPage}` : !limit && order ? `/breeds?order=${order}&page=${apiPage}` : `/breeds`;
    const response = await axios.get<TBreed[]>(url);
  return response.data;
};

const getBreedById = async ({ id, limit }: TBreedIdSort): Promise<TBreedById[]> => {
  const url = limit ? `/images/search?breed_ids=${id}&limit=${limit}` : `/images/search?breed_ids=${id}`;
  const response = await axios.get<TBreedById[]>(url);
  return response.data;
};

export const searchBreed = async (query: string): Promise<TBreed[]> => {
  const response = await axios.get<TBreed[]>(`/breeds/search?q=${query}`);
  return response.data;
};
 
const breedsAPI = {
   getBreeds, getBreedById, searchBreed
}

export default breedsAPI;