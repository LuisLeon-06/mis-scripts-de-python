import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const { cartCount } = useCart();
    const { toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleProtectedClick = (path) => {
        // Implement auth check here if needed
        navigate(path);
        setIsMenuOpen(false);
    };

    const handleScroll = (id) => {
        // If on home page, scroll. If not, navigate home then scroll?
        // Simpler for now: navigate to home
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        setIsMenuOpen(false);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <h1>
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                                <i className="fas fa-code"></i> Nortechly
                            </Link>
                        </h1>
                    </div>
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="#inicio" onClick={(e) => { e.preventDefault(); handleScroll('hero'); }}>Inicio</a></li>
                        <li><a href="#productos" onClick={(e) => { e.preventDefault(); handleScroll('productos'); }}>Productos</a></li>
                        <li><a href="#categorias" onClick={(e) => { e.preventDefault(); handleScroll('categorias'); }}>Categorías</a></li>
                        <li><a href="#contacto" onClick={(e) => { e.preventDefault(); handleScroll('contacto'); }}>Contacto</a></li>
                        <li id="auth-link">
                            <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Login</Link>
                        </li>
                        <li className="cart-icon">
                            <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                                <i className="fas fa-shopping-cart"></i> <span id="cart-count">{cartCount}</span>
                            </Link>
                        </li>
                        <li>
                            <button className="theme-toggle" type="button" aria-label="Toggle dark mode" onClick={toggleTheme}>
                                <i className="fas fa-moon"></i>
                            </button>
                        </li>
                    </ul>
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
