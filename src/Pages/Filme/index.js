import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import './filme.css';

function Filme() {

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '3a2ce5ee66f0acc71003cd3f200a7d48',
          language: 'pt-BR'
        }
      })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log('Filme não encontrado');
        });
    }

    loadMovie();

    return () => {
      console.log('Componente desmontado');
    };
  }, [id]);

  if (loading) {
    return (
      <div className="movie-info">
        <p>Carregando detalhes...</p>
      </div>
    );
  }

return (
  <div className="movie-info">
    <h1>{movie.title}</h1>

    <img
      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
      alt={movie.title}
    />

    <div className="movie-details">
      <h3>Sinopse</h3>

      <strong>
        Avaliação: {movie.vote_average.toFixed(1)} / 10
      </strong>
    </div>

    <span>{movie.overview}</span>
  </div>
);
}

export default Filme;