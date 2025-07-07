import React, { useState } from 'react';
import './Contacto.css';

function Contacto() {
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías hacer un fetch o axios para enviar los datos
        setEnviado(true);
        setForm({ nombre: '', email: '', mensaje: '' });
    };

    return (
        <div className="contacto-container">
            <h1>Contacto</h1>
            <p className="contacto-descripcion">
                ¿Tienes dudas, sugerencias o quieres saber más sobre nuestra tienda de ropa interior? 
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
            <div className="contacto-form-wrapper">
                {enviado ? (
                    <div className="contacto-exito">
                        ¡Gracias por tu mensaje! Pronto nos comunicaremos contigo.
                    </div>
                ) : (
                    <form className="contacto-form" onSubmit={handleSubmit}>
                        <label>
                            Nombre
                            <input
                                type="text"
                                name="nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                                placeholder="Tu nombre"
                            />
                        </label>
                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                autoComplete="off"
                                placeholder="tu@email.com"
                            />
                        </label>
                        <label>
                            Mensaje
                            <textarea
                                name="mensaje"
                                value={form.mensaje}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder="¿En qué podemos ayudarte?"
                            />
                        </label>
                        <button type="submit" className="contacto-btn">
                            Enviar
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Contacto;