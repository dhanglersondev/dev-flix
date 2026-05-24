import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favoritos() {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const favoritosSalvos = localStorage.getItem('@devflix');
        if (favoritosSalvos) {
            setFavoritos(JSON.parse(favoritosSalvos));
        }
    }, []);

    function removeMovie(id) {
        let filtroFilmes = favoritos.filter((item) => {
            return (item.id !== id);
        });
        setFavoritos(filtroFilmes);
        localStorage.setItem('@devflix', JSON.stringify(filtroFilmes));
        toast.success('Filme removido com sucesso!');
    }

    return (
        <div className='myMovies'>
            <h1>Favoritos</h1>

            {favoritos.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

            <ul>
                {favoritos.map((item) => {
                    return (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={() => removeMovie(item.id)}>Excluir</button>
                        </div>
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Favoritos;