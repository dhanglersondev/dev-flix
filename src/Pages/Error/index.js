import { Link } from 'react-router-dom';
import './error.css';

function Error() {
  return (
    <div className="container-error">
      <h1>Error 404</h1>
      <h2>Página não encontrada</h2>
      <p>
        A página que você está procurando não existe ou foi removida.
      </p>

      <Link to="/">Voltar para Home</Link>
    </div>
  );
}

export default Error;