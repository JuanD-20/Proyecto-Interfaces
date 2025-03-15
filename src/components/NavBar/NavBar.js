import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/userSlice';
import './NavBar.css';

const NavBar = () => {
    const { isLoggedIn, user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
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
                            <div className="user-avatar">
                                <img src={user.avatar || '/default-avatar.png'} alt="User Avatar" />
                            </div>
                            <div className="user-name">
                                <h3>Welcome!</h3>
                                <p>{user.name}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="login-buttons">
                            <Link to="/login" className="login-btn">Login</Link>
                            <Link to="/signup" className="signup-btn">Sign Up</Link>
                        </div>
                    )}
                    {isLoggedIn && (
                        <button className="notifications-btn">
                            <span className="notification-icon">🔔</span>
                        </button>
                    )}
                    {isLoggedIn && (
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;