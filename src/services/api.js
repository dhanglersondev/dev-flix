
import axios from 'axios';

// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=3a2ce5ee66f0acc71003cd3f200a7d48&language=pt-BR


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;