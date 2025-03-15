import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <footer className="app-footer">
            <div className="footer-container">
                <Link to="/" className={`footer-item ${isActive('/')}`}>
                    <div className="footer-icon">🏠</div>
                    <span>Home</span>
                </Link>
                <Link to="/schedule" className={`footer-item ${isActive('/schedule')}`}>
                    <div className="footer-icon">🗺️</div>
                    <span>Programa tu ruta</span>
                </Link>
                <Link to="/profile" className={`footer-item ${isActive('/profile')}`}>
                    <div className="footer-icon">👤</div>
                    <span>Profile</span>
                </Link>
                <Link to="/help" className={`footer-item ${isActive('/help')}`}>
                    <div className="footer-icon">❓</div>
                    <span>Ayuda</span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;