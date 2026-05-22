import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/" className="logo">Dev Flix</Link>
      <Link to="/favoritos" className="favoritos">Favoritos</Link>
    </header>
  );
}

export default Header;