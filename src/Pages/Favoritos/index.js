import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';

function Favoritos() {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const favoritosSalvos = localStorage.getItem('@devflix');
        if (favoritosSalvos) {
            setFavoritos(JSON.parse(favoritosSalvos));
        }
    }, []);

    return (
        <div className='myMovies'>
            <h1>Favoritos</h1>
            <ul>
                {favoritos.map((item) => {
                    return (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button>Excluir</button>
                        </div>
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Favoritos;