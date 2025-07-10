import { useAppContext } from '../Context/context';
import './Carrito.css';

function Carrito() {
    const { carrito, eliminarDelCarrito } = useAppContext();

    return (
        <div className="carrito-container">
            <h2>Tu Carrito</h2>
            {carrito.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    {carrito.map((item) => (
                        <div key={item.id} className="carrito-item">
                            <img src={item.img} alt={item.name} width="50" />
                            <div>
                                <h4>{item.name}</h4>
                                <p>${item.price} x {item.cantidad}</p>
                            </div>
                            <button 
                                onClick={() => eliminarDelCarrito(item.id)}
                                className="eliminar-btn"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    <div className="carrito-total">
                        <strong>Total: ${
                            carrito.reduce((sum, item) => sum + (item.price * item.cantidad), 0)
                        }</strong>
                    </div>
                </>
            )}
        </div>
    );
}

export default Carrito;