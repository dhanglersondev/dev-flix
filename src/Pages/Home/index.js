import { useEffect, useState } from 'react';
import api from '../../services/api';

// URL DA API: /movie/now_playing?api_key=3a2ce5ee66f0acc71003cd3f200a7d48&language=pt-BR

function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function fetchMovies() {
      const response = await api.get('/movie/now_playing', {
        params: {
          api_key: '3a2ce5ee66f0acc71003cd3f200a7d48',
          language: 'pt-BR',
          page: 1
        }
      });

      setMovies(response.data.results);
    }

    fetchMovies();

  }, []);

  return (
    <div>
      <h1>Bem-vindo ao DevFlix!</h1>
      <h2>Explore nossos filmes.</h2>
    </div>
  );
}

export default Home;