import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../store/slices/userSlice';
import './styles/Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginStart());

        // Simulando una API call
        setTimeout(() => {
            if (email && password) {
                // Datos de usuario de ejemplo
                const userData = {
                    id: 1,
                    name: 'NEW USER',
                    email,
                    avatar: '../../images/defaultProfile.jpg'
                };
                dispatch(loginSuccess(userData));
                navigate('/');
            } else {
                dispatch(loginFailure('Email y contraseña son requeridos'));
            }
        }, 1000);
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-header">
                    <h1>Iniciar Sesión</h1>
                    <p>Bienvenido a UniRide</p>
                </div>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ejemplo@email.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                            required
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="auth-button">Iniciar Sesión</button>
                    </div>
                </form>
                <div className="auth-links">
                    <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                    <p>
                        ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
                    </p>
                </div>
                <div className="auth-back">
                    <Link to="/" className="back-link">Volver al inicio</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
