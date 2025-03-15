import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import './styles/RouteDetails.css';

const RouteDetails = () => {
    const { id } = useParams();

    // Datos de ejemplo para una ruta específica
    const routeData = {
        id,
        name: 'JAVERIANA CALI',
        address: 'Cl. 18 #118-250, Barrio Pance, Cali, Valle del Cauca',
        image: '/images/javeriana.jpg',
        drivers: [
            {
                id: 1,
                name: 'Carlos Martínez',
                rating: 4.8,
                departure: '7:30 AM',
                price: 5000,
                availableSeats: 3
            },
            {
                id: 2,
                name: 'María López',
                rating: 4.6,
                departure: '8:00 AM',
                price: 4800,
                availableSeats: 2
            },
            {
                id: 3,
                name: 'Juan Pérez',
                rating: 4.9,
                departure: '8:30 AM',
                price: 5200,
                availableSeats: 4
            }
        ]
    };

    return (
        <div className="route-details-page">
            <NavBar />
            <div className="route-details-container">
                <div className="route-header" style={{ backgroundImage: `url(${routeData.image})` }}>
                    <Link to="/" className="back-button">
                        <span>←</span>
                    </Link>
                    <div className="route-header-content">
                        <h1>{routeData.name}</h1>
                        <div className="route-address">
                            <span className="location-icon">📍</span>
                            <p>{routeData.address}</p>
                        </div>
                    </div>
                </div>

                <div className="route-content">
                    <div className="route-info">
                        <h2>Conductores disponibles</h2>
                        <p className="info-text">Estos conductores ofrecen cupos para esta ruta:</p>
                    </div>

                    <div className="drivers-list">
                        {routeData.drivers.map(driver => (
                            <div className="driver-card" key={driver.id}>
                                <div className="driver-info">
                                    <div className="driver-name-rating">
                                        <h3>{driver.name}</h3>
                                        <div className="driver-rating">
                                            <span className="star-icon">⭐</span>
                                            <span>{driver.rating}</span>
                                        </div>
                                    </div>
                                    <div className="driver-details">
                                        <div className="detail-item">
                                            <span className="detail-icon">🕒</span>
                                            <span>Salida: {driver.departure}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-icon">💺</span>
                                            <span>Cupos: {driver.availableSeats}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-icon">💰</span>
                                            <span>Precio: ${driver.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/schedule?driver=${driver.id}&route=${id}`} className="book-button">
                                    Reservar
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="route-actions">
                        <Link to="/schedule" className="offer-ride-button">
                            Ofrecer cupo para esta ruta
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RouteDetails;
