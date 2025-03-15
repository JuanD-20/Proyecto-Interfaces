import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addRide } from '../store/slices/ridesSlice';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import './styles/ScheduleRide.css';

const ScheduleRide = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    // Obtener parámetros de la URL
    const queryParams = new URLSearchParams(location.search);
    const driverId = queryParams.get('driver');
    const routeId = queryParams.get('route');

    // Estado para el formulario
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        date: '',
        time: '',
        seats: '1',
        price: '',
        notes: ''
    });

    // Función para manejar cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Función para enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear objeto de viaje
        const newRide = {
            id: Date.now(),
            userId: user.id,
            driverName: user.name,
            ...formData,
            status: 'pending'
        };

        // Dispatch para añadir el viaje
        dispatch(addRide(newRide));

        // Navegar a la página de inicio
        alert('¡Tu viaje ha sido programado con éxito!');
        navigate('/');
    };

    return (
        <div className="schedule-ride-page">
            <NavBar />
            <div className="schedule-container">
                <div className="schedule-header">
                    <h1>{driverId ? 'Reservar Cupo' : 'Programar Viaje'}</h1>
                    <p>Completa la información para {driverId ? 'reservar un cupo' : 'ofrecer un viaje'}</p>
                </div>

                <form className="schedule-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="origin">Origen</label>
                        <input
                            type="text"
                            id="origin"
                            name="origin"
                            value={formData.origin}
                            onChange={handleChange}
                            placeholder="Dirección de origen"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="destination">Destino</label>
                        <input
                            type="text"
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            placeholder="Dirección de destino"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="date">Fecha</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="time">Hora</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="seats">Cupos</label>
                            <select
                                id="seats"
                                name="seats"
                                value={formData.seats}
                                onChange={handleChange}
                                required
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Precio por cupo</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="$"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="notes">Notas adicionales</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Información adicional para los pasajeros"
                        ></textarea>
                    </div>

                    <button type="submit" className="schedule-button">
                        {driverId ? 'Reservar Cupo' : 'Programar Viaje'}
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ScheduleRide;