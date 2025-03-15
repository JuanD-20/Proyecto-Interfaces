import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../store/slices/userSlice';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import './styles/Profile.css';

const Profile = () => {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [name, setName] = React.useState(user?.name || '');
    const [email, setEmail] = React.useState(user?.email || '');
    const [phone, setPhone] = React.useState(user?.phone || '');
    const [university, setUniversity] = React.useState(user?.university || '');
    const [carInfo, setCarInfo] = React.useState(user?.carInfo || '');
    const [isDriver, setIsDriver] = React.useState(user?.isDriver || false);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            name,
            email,
            phone,
            university,
            carInfo,
            isDriver
        }));
        alert('Perfil actualizado con éxito');
    };

    return (
        <div className="profile-page">
            <NavBar />
            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-avatar">
                        <img src={user?.avatar || '/images/default-avatar.png'} alt="User Avatar" />
                    </div>
                    <h1>{user?.name}</h1>
                    <p>{user?.email}</p>
                    <div className="profile-status">
                        {user?.isDriver ? 'Conductor' : 'Pasajero'}
                    </div>
                </div>

                <div className="profile-form-container">
                    <h2>Editar Perfil</h2>
                    <form className="profile-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre Completo</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono</label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="university">Universidad</label>
                            <input
                                type="text"
                                id="university"
                                value={university}
                                onChange={(e) => setUniversity(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={isDriver}
                                    onChange={(e) => setIsDriver(e.target.checked)}
                                />
                                <span>Quiero ser conductor</span>
                            </label>
                        </div>
                        {isDriver && (
                            <div className="form-group">
                                <label htmlFor="carInfo">Información del vehículo</label>
                                <textarea
                                    id="carInfo"
                                    value={carInfo}
                                    onChange={(e) => setCarInfo(e.target.value)}
                                    placeholder="Marca, modelo, color, placa"
                                ></textarea>
                            </div>
                        )}
                        <button type="submit" className="save-button">Guardar Cambios</button>
                    </form>
                </div>

                <div className="profile-sections">
                    <div className="profile-section">
                        <h3>Mis Viajes</h3>
                        <div className="section-content">
                            <p className="empty-state">No hay viajes registrados</p>
                        </div>
                    </div>
                    <div className="profile-section">
                        <h3>Mis Rutas Favoritas</h3>
                        <div className="section-content">
                            <p className="empty-state">No hay rutas favoritas guardadas</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
