import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/slices/userSlice';
import './styles/Auth.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        // Simulando registro exitoso
        setTimeout(() => {
            // Datos de usuario de ejemplo
            const userData = {
                id: Math.floor(Math.random() * 1000),
                name,
                email,
                avatar: '/images/default-avatar.png'
            };
            dispatch(loginSuccess(userData));
            navigate('/');
        }, 1000);
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-header">
                    <h1>Crear Cuenta</h1>
                    <p>Únete a la comunidad UniRide</p>
                </div>
                {error && <div className="auth-error">{error}</div>}
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre Completo</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ej. Juan Pérez"
                            required
                        />
                    </div>
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
                            placeholder="Crea una contraseña segura"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Repite tu contraseña"
                            required
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="auth-button">Registrarse</button>
                    </div>
                </form>
                <div className="auth-links">
                    <p>
                        ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
                    </p>
                </div>
                <div className="auth-back">
                    <Link to="/" className="back-link">Volver al inicio</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;