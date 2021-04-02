import axios from 'axios';

const api = axios.create({
  baseURL:'https://proffyapi.vercel.app:3333',
});

export default api;