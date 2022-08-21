import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mv-trekker-api.herokuapp.com/api/v1',
  headers: { 'Content-Type': 'application/json' },
});

export default api;

