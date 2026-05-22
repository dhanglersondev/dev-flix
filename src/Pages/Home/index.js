import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './home.css';

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

      setMovies(response.data.results.slice(0, 10));
    }

    fetchMovies();

  }, []);

  return (
    <div className="container">
      <h1>Veja os filmes que estão em cartaz no momento</h1>
      <div className="movies-list">
        {movies.map(movie => (
          <article key={movie.id}>
            <strong>{movie.title}</strong>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <Link to={`/movie/${movie.id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;