import { useAppContext } from '../Context/context';
import { useState } from 'react';
import './CardWidget.css';
import Carrito from '../Carrito/Carrito';

function CardWidget() {
    const { numero } = useAppContext();
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    return (
        <div className="card-widget-container">
            <button 
                onClick={() => setMostrarCarrito(!mostrarCarrito)}
                className="cart-toggle"
            >
                🛒({numero})
            </button>
            {mostrarCarrito && (
                <div className="carrito-flotante">
                    <Carrito />
                </div>
            )}
        </div>
    );
}

export default CardWidget;