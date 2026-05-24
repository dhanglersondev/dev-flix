import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

import './filme.css';

function Filme() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadMovie() {

      await api.get(`/movie/${id}`, {
        params: {
          api_key: '3a2ce5ee66f0acc71003cd3f200a7d48',
          language: 'pt-BR',
        }
      })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log('Filme não encontrado');
          navigate('/', { replace: true });
          return;
        });

    }

    loadMovie();

    return () => {
      console.log('Componente desmontado');
    };

  }, [id, navigate]);

  function saveMovie() {

    const myList = localStorage.getItem('@devflix');
    let savedMovies = JSON.parse(myList) || [];

    const hasMovie = savedMovies.some(
      (savedMovie) => savedMovie.id === movie.id
    );

    if (hasMovie) {
      toast.warning('Esse filme já está como favorito!');
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem('@devflix', JSON.stringify(savedMovies));

    toast.success('Filme salvo com sucesso!');
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando detalhes...</h2>
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
          ⭐ {movie.vote_average.toFixed(1)} / 10
        </strong>
      </div>

      <span>{movie.overview}</span>

      <div className="buttons-area">
        <button onClick={saveMovie}>
          Favoritar
        </button>

        <a href={`https://www.youtube.com/results?search_query=${movie.title} Trailer`} target="blank" rel="noopener noreferrer">
          Trailer
        </a>
      </div>

    </div>
  );
}

export default Filme;