import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import './styles/Help.css';

const Help = () => {
    const faqItems = [
        {
            question: '¿Cómo funciona UniRide?',
            answer: 'UniRide es una plataforma que conecta a estudiantes y personal universitario que desean compartir viajes. Los conductores ofrecen cupos en sus vehículos a un precio módico, y los pasajeros pueden reservar estos cupos para ahorrar en transporte.'
        },
        {
            question: '¿Cómo reservo un cupo?',
            answer: 'Para reservar un cupo, navega a la ruta que deseas, selecciona un conductor disponible y haz clic en "Reservar". Completa la información requerida y confirma tu reserva.'
        },
        {
            question: '¿Cómo me convierto en conductor?',
            answer: 'Para convertirte en conductor, debes ir a tu perfil, activar la opción "Quiero ser conductor" y completar la información de tu vehículo. Luego podrás ofrecer cupos en las rutas que desees.'
        },
        {
            question: '¿Cómo se manejan los pagos?',
            answer: 'Por ahora, los pagos se realizan directamente entre conductor y pasajero.'
        },
        {
            question: '¿Cómo puedo reportar un problema?',
            answer: 'Si tienes algún problema, puedes contactarnos a través de la sección de ayuda o enviar un correo a soporte@uniride.com.'
        }
    ];

    return (
        <div className="help-page">
            <NavBar />
            <div className="help-container">
                <div className="help-header">
                    <h1>Centro de Ayuda</h1>
                    <p>Encuentra respuestas a tus preguntas frecuentes</p>
                </div>

                <div className="faq-section">
                    <h2>Preguntas Frecuentes</h2>
                    <div className="faq-list">
                        {faqItems.map((item, index) => (
                            <div className="faq-item" key={index}>
                                <h3>{item.question}</h3>
                                <p>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contact-section">
                    <h2>Contacto</h2>
                    <p>Si no encuentras la respuesta a tu pregunta, contáctanos:</p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="contact-icon">📧</span>
                            <p>soporte@uniride.com</p>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📞</span>
                            <p>+57 300 123 4567</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Help;