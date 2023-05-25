import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common["x-api-key"] = process.env.REACT_APP_API_KEY;

export { default as votingAPI } from './voting';
export { default as favoriteAPI } from './favorite';

