import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/userSlice';
import './NavBar.css';

const NavBar = () => {
    const { isLoggedIn, user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        setShowDropdown(false);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">UniRide</Link>
                </div>
                <div className="navbar-welcome">
                    {isLoggedIn ? (
                        <div className="user-info">
                            {isLoggedIn && (
                                <button className="notifications-btn">
                                    <span className="notification-icon">🔔</span>
                                </button>
                            )}
                            <div className="user-avatar" onClick={toggleDropdown}>
                                <img src={user.avatar || '../../images/defaultProfile.jpg'} alt="User Avatar" />
                            </div>
                            {showDropdown && (
                                <div className="user-dropdown">
                                    <ul>
                                        <li><Link to="/">Inicio</Link></li>
                                        <li><Link to="/profile">Mi Perfil</Link></li>
                                        <li><Link to="/schedule">Programa tu ruta</Link></li>
                                        <li><Link to="/help">Ayuda</Link></li>
                                        <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="login-buttons">
                            <Link to="/login" className="login-btn">Login</Link>
                            <Link to="/signup" className="signup-btn">Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;