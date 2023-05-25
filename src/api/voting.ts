import axios from 'axios';
import { TRandomCat } from './types/cat';
import { TVote, TVoteInfo } from './types/vote';

const getRandomCat = async (): Promise<TRandomCat> => {
  const response = await axios.get<TRandomCat[]>('/images/search');
  return response.data[0];
};
 
const makeVote = async ({ imageId, userId, value }: TVote) => {
const response = await axios.post('/votes', {
    image_id: imageId,
    sub_id: userId,
    value
});
  
  return response.data;
};

 
const getVotings = async (userId: string): Promise<TVoteInfo[]> => {
  const response = await axios.get<TVoteInfo[]>(`/votes?sub_id=${userId}&order=DESC`);
  return response.data;
 };

const votingAPI = {
   getRandomCat, makeVote, getVotings
}

export default votingAPI;