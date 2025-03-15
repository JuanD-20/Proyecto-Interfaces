import React from 'react';
import { Link } from 'react-router-dom';
import './ZoneNavigation.css';

const ZoneNavigation = () => {
    const zones = [
        { id: 'norte', name: 'Norte', icon: '🏠' },
        { id: 'sur', name: 'Sur', icon: '🏠' },
        { id: 'este', name: 'Este', icon: '🏠' },
        { id: 'oeste', name: 'Oeste', icon: '🏠' },
        { id: 'jamundi', name: 'Jamundí', icon: '🚗' },
        { id: 'palmira', name: 'Palmira', icon: '🏢' },
        { id: 'jumbo', name: 'Jumbo', icon: '🏢' },
        { id: 'centro', name: 'Centro', icon: '🏢' }
    ];

    return (
        <div className="zone-navigation">
            <h2>Zonas</h2>
            <div className="zone-grid">
                {zones.map(zone => (
                    <Link to={`/zone/${zone.id}`} className="zone-item" key={zone.id}>
                        <div className="zone-icon">{zone.icon}</div>
                        <span>{zone.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ZoneNavigation;
