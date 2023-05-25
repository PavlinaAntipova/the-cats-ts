import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common["x-api-key"] = import.meta.env.VITE_API_KEY;

export { default as votingAPI } from './voting';
export { default as favoriteAPI } from './favorite';

