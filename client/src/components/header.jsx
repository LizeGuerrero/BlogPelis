import { Link } from 'react-router-dom';
import './header.css';
import hamster from '../assets/logo-Hamster.png';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container-header">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={hamster} alt="Hamster Piensa" className="hamster-icon" />
          <span className="site-name">Hamster Piensa</span>
        </Link>

        {/* Toggle para menú responsive */}
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
<label htmlFor="menu-toggle" className="menu-icon">
  ☰ {/* Carácter Unicode para un ícono tipo "hamburguesa" */}
</label>

        {/* Menú de navegación */}
        <nav className="main-navbar">
          <ul className="nav-list">
            <li>
              <Link to="/gestorpeliculas">Películas</Link>
              <ul className="dropdown">
                <li><Link to="/gestorpeliculas?category=accion">Acción</Link></li>
                <li><Link to="/gestorpeliculas?category=comedia">Comedia</Link></li>
                <li><Link to="/gestorpeliculas?category=drama">Drama</Link></li>
              </ul>
            </li>
            <li><Link to="/reviews">Reseñas</Link></li>
            <li><Link to="/contact">Contáctanos</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li>
              <button className="login-btn" onClick={() => window.location.href = "/gestorpeliculas"}>
                <img src="/path/to/hamster-login-icon.svg" alt="Login" className="login-icon" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
