import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__top"></div>
      <div className="header__logo">
        <div className="header__logo-line"></div>
        <div className="header__logo-text">
          <span className="header__logo-jp">おやすみ</span>
          <span className="header__logo-en">PUNPUN</span>
        </div>
        <div className="header__logo-line"></div>
      </div>
      <nav className="header__nav">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          [ journal ]
        </Link>
        <Link to="/api-tasks" className={location.pathname === '/api-tasks' ? 'active' : ''}>
          [ api ]
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          [ about ]
        </Link>
      </nav>
      <div className="header__bottom"></div>
    </header>
  );
}

export default Header;