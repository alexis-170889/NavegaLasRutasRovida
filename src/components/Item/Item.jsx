import { Link } from 'react-router-dom';
import './Item.css';
import { useAppContext } from '../Context/context';

function Item({ id, price, name, img }) {
    const { agregarAlCarrito } = useAppContext();

    return (
        <div className="card">
            <div className="card-content">
                <img src={img} className="card-image" alt={name} />
                <div className="card-content">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-price">${price}</p>
                </div>
                <Link to={`/detalle/${id}`}>
                    <button className="card-button">Ver Detalle</button>
                </Link>
                <button 
                    className="card-button" 
                    onClick={() => agregarAlCarrito({ id, price, name, img })}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default Item;