import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './FavoriteLocations.css';

const FavoriteLocations = () => {
    const { favorites } = useSelector(state => state.favorites);

    // Crear algunos datos de ejemplo si no hay favoritos todavía
    const demoFavorites = favorites.length ? favorites : [
        {
            id: 1,
            name: 'Condominio EntreLagos',
            address: 'Avenida lago calle La Fontana, Jamundi',
            type: 'residence'
        },
        {
            id: 2,
            name: 'Colegio Mayor San Francisco De Asís Sede Pance',
            address: 'Cl. 18 #132-90, Brisas Del Pance, Cali, Valle',
            type: 'university'
        }
    ];

    return (
        <div className="favorite-locations">
            <h2>Mis lugares favoritos</h2>
            <div className="favorite-list">
                {demoFavorites.map(location => (
                    <Link to={`/route/${location.id}`} className="favorite-item" key={location.id}>
                        <div className="favorite-icon">
                            <span className="time-icon">⏱️</span>
                        </div>
                        <div className="favorite-info">
                            <h3>{location.name}</h3>
                            <p>{location.address}</p>
                        </div>
                        <div className="favorite-arrow">
                            <span>›</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FavoriteLocations;
