import axios from 'axios';

const api = axios.create({
  baseURL:'https://testeserverproffy.herokuapp.com',
  //'https://testeserverproffy.herokuapp.com'
  //'http://localhost:3333'
});

export default api;
