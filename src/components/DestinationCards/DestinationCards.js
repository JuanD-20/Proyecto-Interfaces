import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationCards.css';

const DestinationCards = () => {
    // Datos de ejemplo para destinos destacados
    const destinations = [
        {
            id: 1,
            name: 'JAVERIANA CALI',
            address: 'Cl. 18 #118-250, Barrio Pance, Cali, Valle del Cauca',
            image: '/images/javeriana.jpg'
        },
        {
            id: 2,
            name: 'ICESI',
            address: 'Cl. 18 #122-135, Pance, Cali, Valle del Cauca',
            image: '/images/icesi.jpg'
        },
        {
            id: 3,
            name: 'UNIVERSIDAD DEL VALLE',
            address: 'Cl. 13 #100-00, Cali, Valle del Cauca',
            image: '/images/univalle.jpg'
        },
        {
            id: 4,
            name: 'UNIVERSIDAD AUTÓNOMA',
            address: 'Cl. 25 #115-85, Cali, Valle del Cauca',
            image: '/images/autonoma.jpg'
        }
    ];

    return (
        <div className="destination-cards">
            <div className="cards-container">
                {destinations.map(destination => (
                    <Link to={`/route/${destination.id}`} className="card" key={destination.id}>
                        <div className="card-image" style={{ backgroundImage: `url(${destination.image})` }}>
                            <div className="card-info">
                                <h3>{destination.name}</h3>
                                <div className="card-address">
                                    <span className="location-icon">📍</span>
                                    <p>{destination.address}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DestinationCards;