import axios from 'axios';
import { TVoteFavorite, TVoteFavoriteResponse, TVoteInfo } from './types/vote';

const getFavorites = async (userId: string): Promise<TVoteInfo[]> => {
  const response = await axios.get<TVoteInfo[]>(`/favourites?sub_id=${userId}&order=DESC`);
  return response.data;
 };
 
const makeFavorite = async ({imageId, userId}: TVoteFavorite): Promise<TVoteFavoriteResponse> => {
const response = await axios.post('/favourites', {
    image_id: imageId,
    sub_id: userId,
});
    return response.data;
};

const deleteFavorite = async (favoriteId: string) => {
    await axios.delete(`/favourites/${favoriteId}`); 
};

const favoriteAPI = {
   getFavorites, makeFavorite, deleteFavorite
}

export default favoriteAPI;